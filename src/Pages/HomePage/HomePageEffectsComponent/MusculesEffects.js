import React from "react";
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    btn: {
        width:'50vw',
        height:'12vw',
        textAlign:'center',
        alignSelf:'center',
        backgroundColor: '#8D74C8',
        borderRadius: '10vw',
        paddingVertical:'2vw',
    },
    btnTxt:{
        textAlign:'center',
        height: '100%',
        color:'white',
        fontSize:'5vw',
    },
    headerTxt:{
        color: '#8D74C8',
        fontSize:'8vw',
        textAlign: 'center'
    },
    headerBlock:{
        height: '15vw'
    },
    infoContainer:{
        backgroundColor: '#8D74C8',
        borderRadius: '5vw',
        marginLeft: '3vw',
        marginRight: '3vw',
        padding: '5vw',
        marginBottom: '3vw',
    },
    infoText:{
        color: 'white'        
    },
    items:{
        margin: '4vw',
        paddingLeft: '2vw',
        borderLeftColor: 'white',
        borderLeftWidth: '3vw',
        
    },
    textItem:{
        paddingTop: '2vw',
        textAlign: 'center',
        fontWeight:'bold'
    },
    firstLetter:{
        paddingLeft: '3vw'
    },
    header:{
        fontSize: '5vw',
        textAlign: 'center',
        alignContent: 'center',
        fontWeight: 'bold'
    }


})

export default function MusculesEffects({navigation}){
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.headerBlock}>
                <Text style={styles.headerTxt}>Влияние на Мыщцы</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.infoText}><Text style={styles.firstLetter}>Боли</Text> Боли в мышцах и суставах после ковида 
            возникают у немалого процента перенесших это тяжелое заболевание. Особенно высок риск развития таких осложнений 
            у пожилых пациентов, которые болели в средней, либо тяжелой форме. Нередко это осложнение сочетается с 
            поражением мышц, связок, сухожилий, суставов и других органов.{"\n"}

            <Text style={styles.firstLetter}>У</Text> молодых людей, перенесших заболевание легко, осложнения 
            регистрируются реже, но вероятность их 
            возникновения гораздо выше, в сравнении с обычной ОРВИ или гриппом. В любом случае, появление первых 
            симптомов требует повышенного внимания к 
            лечению, направленному на прекращение патологических процессов в соединительных тканях,
             вызванных вирусом SARS-COV-2.{"\n"}{"\n"}
            
             <View><Text style={styles.header}>Причины болей в мышцах и суставах после коронавируса</Text></View>{"\n"}{"\n"}
            <Text style={styles.firstLetter}>Артрит</Text>  и другие поражения соединительных тканей 
            после коронавируса развиваются в результате воздействия двух факторов:{"\n"}{"\n"}
            <View style={styles.items}>
                <Text style={{fontWeight:'bold', textAlign: 'center'}}>Токсинов</Text>{"\n"}
                <Text>
                    , образующихся при гибели пораженных вирусом клеток. В результате разрушения
                    зараженных клеток выделяется множество веществ, являющихся стимуляторами воспалительных процессов. Вместе с кровью 
                    они разносятся по всему организму, что может привести к возникновению воспаления в различных суставах, мышцах, либо 
                    органах.{"\n"}
                </Text>
                
                <Text style={{fontWeight:'bold', textAlign: 'center'}}>Аутоиммунных процессов</Text>{"\n"}
                    <Text>
                        Выздоровление происходит благодаря тому, что иммунная система
                        учится вырабатывать антитела, уничтожающие вирусные частицы. Кроме этого, играет большую роль в подавлении инфекции быстрое
                        распознание и уничтожение собственных клеток, зараженных коронавирусом. При этом вырабатываются специфические антитела, 
                        которые могут воздействовать и на здоровые клетки, разрушая их и вызывая ревматоидный артрит и другие патологии.{"\n"}
                    
                    </Text>

            </View>
                <View><Text style={styles.header}>Какие осложнения могут возникнуть без своевременного лечения</Text></View>{"\n"}{"\n"}
                <Text>Отсутствие вовремя начатого лечения может привести к дальнейшему усугублению симптомов. 
                    Кроме того, возрастает риск их утяжеления и появления более серьезных заболеваний, таких как:</Text>
                    
                    <View style={styles.items}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Миозит</Text>{"\n"}
                        <Text>
                            Это воспаление мышечной ткани, которое может привести к ее разрушению. В результате в кровоток поступают 
                            белки из разрушенных мышечных волокон и блокируют работу почек, что приводит к почечной недостаточности.
                            {"\n"}</Text>

                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Кардиальные осложнения</Text>{"\n"}
                        <Text>
                            Развиваются, если воспалительный процесс поражает сердечную мышцу, перикард, либо стенки сосудов.{"\n"}
                        </Text>

                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Энцефалопатия</Text>{"\n"}
                        <Text>
                        Это поражение ЦНС, развивающееся в результате повреждения мелких сосудов и гематоэнцефалического барьера.
                        {"\n"}</Text>

                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Ревматоидный артрит</Text>{"\n"}
                        <Text>
                        Относится к аутоиммунным патологиям, возникает при воздействии антител на суставной хрящ, либо оболочки сустава.{"\n"}
                        </Text>                       
                        
                    </View>
                        <Text>
                            Чтобы избежать развития этих тяжелых патологий, важно вовремя начать лечение суставов после коронавируса. 
                            Это предотвратит 
                            дальнейшее усугубление процесса и позволит остановить его на ранней стадии, без перехода в более тяжелые формы.
                        </Text>
                    </Text>
                

            </View>
            
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.btnTxt}>Назад</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}