
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const topics = [
    { id: '1', title: 'comic villain' },
    { id: '2', title: 'Technology' },
    { id: '3', title: 'Science facts' },
    { id: '4', title: 'Universe' },
    { id: '5', title: 'Wallpaper' },
    { id: '6', title: 'Calligraphy' },
    { id: '7', title: 'AI startup' },
    { id: '8', title: 'Robots' },
];

const shuffleAndSlice = (array, size) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
};

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [isType, setIsType] = useState(false)
    const router = useRouter()
    const [displayTopics1, setDisplayTopics1] = useState([]);
    const [displayTopics2, setDisplayTopics2] = useState([]);
    const [displayTopics3, setDisplayTopics3] = useState([]);

    useEffect(() => {
        setDisplayTopics1(shuffleAndSlice(topics, 5));
        setDisplayTopics2(shuffleAndSlice(topics, 5));
        setDisplayTopics3(shuffleAndSlice(topics, 5));
    }, []);
    const handleSearch = (text: string) => {
        setIsType(true)
        setQuery(text);
    };
    useEffect(() => {
        (query && !isType) && router.push(`/search/${query}`)
    }, [query]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { (query === item.title) ? router.push(`/search/${query}`) : setQuery(item.title) }} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={handleSearch}
                onSubmitEditing={() => router.push(`/search/${query}`)}
            />
            <View style={styles.container}>
                <Text
                    style={{
                        marginVertical: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}
                >Explore the world with us</Text>
                <FlatList
                    data={displayTopics1}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
                <FlatList
                    data={displayTopics2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
                <FlatList
                    data={displayTopics3}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    item: {
        backgroundColor: '#c6c6c6',
        padding: 10,
        paddingHorizontal: 20,
        flexGrow: 0,
        flexBasis: 0,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    title: {
        color: 'black',
        textTransform: 'capitalize'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
});

export default SearchPage;
