import {Text, TextInput, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){
    const participants = ['Vitor', 'Vitor2', 'Vitor3','Vitor4']

    function handleParticipantAdd(){
        if(participants.includes('Vitor')){
            return Alert.alert('Participante já existente!', 'Este participante já esta adicionado na lista.')
        }
        console.log('Adicionou')
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
                    Adicione participantes a sua lista.
                </Text>
            )}
        
        />
    </View>
  )
}