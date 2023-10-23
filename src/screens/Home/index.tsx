import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {

    const participants = ['Pedro', 'Thais', 'Thiago', 'Lucas', 'Ana', 'Isa', 'Igor', 'João', 'Maria', 'José'];

    function handleParticipantAdd() {
        console.log('Você clicou no botão de Adicionar!')
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou no botão de Remover ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName} >
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhum participante adicionado
                    </Text>
                )}
            />

        </View>
    )
}
