import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Chat = ({ route }) => {
    const { doctor } = route.params;
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const storageKey = doctor ? `messages_${doctor.id}` : null;

    const sendMessage = () => {
        if (inputText.trim() === '') return;
        setMessages(prevMessages => [...prevMessages, { text: inputText }]);
        setInputText('');
    };

    useFocusEffect(
        React.useCallback(() => {
            const loadMessages = async () => {
                try {
                    if (storageKey) {
                        const savedMessages = await AsyncStorage.getItem(storageKey);
                        if (savedMessages) {
                            setMessages(JSON.parse(savedMessages));
                        }
                    }
                } catch (error) {
                    console.error("Error loading messages:", error);
                }
            };
            loadMessages();
        }, [storageKey])
    );

    useFocusEffect(
        React.useCallback(() => {
            const saveMessages = async () => {
                try {
                    if (storageKey) {
                        await AsyncStorage.setItem(storageKey, JSON.stringify(messages));
                    }
                } catch (error) {
                    console.error("Error saving messages:", error);
                }
            };
            saveMessages();
        }, [messages, storageKey])
    );

    const renderMessage = ({ item }) => (
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={doctor.image} style={styles.img} />
                <Text style={styles.name}>{doctor.name}</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={inputText}
                    onChangeText={setInputText}
                    placeholderTextColor="#696969"
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 40
    },
    img: {
        width: 55,
        height: 55,
        borderRadius: 50,
        margin: 5,
        marginBottom: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 22,
        marginLeft: 8,
    },
    nm: {
        fontSize: 20,
        fontWeight: '500',
    },
    messageContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 3,
        borderRadius: 10,
        alignSelf: 'flex-start'
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#696969',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#199A8E',
        borderRadius: 20,
        alignItems: 'center',
        width: 80,
        justifyContent: 'center'
    },
    sendButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
});
export default Chat