import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Item } from '@/app/(tabs)'

const Card = ({ item }: { item: Item }) => {
    const imageUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title || 'Title'}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 2
    },
    card: {
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
});