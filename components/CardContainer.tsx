import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, RefreshControl, TextInput } from 'react-native';
import { allImage, searchQuery } from '@/utils/FetchFromAPI';
import Card from './Card';
import { useRouter } from 'expo-router';
import { Item } from '@/app/(tabs)/(bottom)';

interface ActionObject {
    [key: string]: (params: { page: number, query?: string }) => Promise<any>;
}

type ActionsOptions = 'all-image' | 'query';

const CardContainer = ({ Action, Query }: { Query?: string; Action: ActionsOptions }) => {
    const [photos, setPhotos] = useState<Item[]>([]);
    const router = useRouter();
    const [error, setError] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState(Query ? Query : '');
    const [loadingMore, setLoadingMore] = useState(false);

    const action: ActionObject = {
        "all-image": allImage,
        'query': searchQuery
    };

    const onRefresh = () => {
        setRefreshing(true);
        setPage(1);
        fetchRecentPhotos(1);
        setRefreshing(false);
    };

    const fetchRecentPhotos = async (pageNumber: number) => {
        try {
            const response = await action[Action]({ page: pageNumber, query });
            const { photos } = response;
            if (pageNumber === 1) {
                setPhotos(photos.photo);
            } else {
                setPhotos(prevPhotos => [...prevPhotos, ...photos.photo]);
            }
        } catch (err) {
            setError('Failed to fetch photos');
        }
    };

    const loadMorePhotos = () => {
        if (loadingMore) return;

        const nextPage = page + 1;
        setLoadingMore(true);
        fetchRecentPhotos(nextPage).then(() => {
            setLoadingMore(false);
            setPage(nextPage);
        });
    };

    useEffect(() => {
        fetchRecentPhotos(page);
    }, []);

    useEffect(() => {
        if (query) {
            setPage(1);
            setPhotos([]);
            fetchRecentPhotos(1);
        }
    }, [query]);

    return (
        <View style={styles.container}>
            {error ? <Text>{error}</Text> : null}
            <FlatList
                data={photos}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item: Item) => `${item.id.toString()}-${item.secret}-${item.server}-${item.title}`}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                onEndReached={loadMorePhotos}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loadingMore ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 2
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },
});

export default CardContainer;
