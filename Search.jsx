import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { AllDoctorData } from './Data';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            const filtered = AllDoctorData.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                onChangeText={text => setSearchQuery(text)}
                value={searchQuery}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 10
    },
    item: {
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 10,
    },
    searchInput: {
        paddingHorizontal: 15,
        height: 40,
        width: '98%',
        borderColor: '#ddd',
        backgroundColor: '#E5E7EB',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});

export default Search;