import { useState } from 'react';
import {Text, TextInput, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    function handleParticipantAdd(){
        


        if(participants.includes(participantName)){
            return Alert.alert('Participante já existente!', 'Este participante já está adicionado à sua lista.')
        }
        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }
    function handleParticipantRemove(name: string){
        Alert.alert('Remover participante',`Deseja remover ${name} de sua lista?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Participante removido')
            },
            {
                text: 'Não',
                style: 'destructive',

            }
        ])
    }

  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Quinta, 16 de Março de 2023.</Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder='Nome do participante.'
                placeholderTextColor='#6B6B6B'
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity> 
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => ( 
                <Participant 
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmpty}>
                    Adicione participantes á sua lista.
                </Text>
            )}
        
        />
    </View>
  )
}