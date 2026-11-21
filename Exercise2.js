
import React from 'react';
import {View, Text, SectionList, TouchableOpacity, StyleSheet} from 'react-native';

const datasource = [
    {
        data: [
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
        ],
        title: "Vowels",
    },
    {
        data: [
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'u'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ],
        title: "Consonants",
    },
];

const Exercise2 = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1, margin: 10}}>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section: {title}}) => (
                    <Text
                        style={[
                            styles.headerText,
                            title === 'Vowels'
                                ? styles.vowelHeader
                                : styles.consonantHeader
                        ]}
                    >
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    vowelHeader: {
        backgroundColor: 'skyblue',
    },
    consonantHeader: {
        backgroundColor: 'khaki',
    },
});

export default Exercise2;
