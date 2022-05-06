import {StyleSheet} from "react-native";
import React from "react";

export default function HomePageStyles() {
    const styles =StyleSheet.create({
        container: {
            backgroundColor: '#8D74C8',
            display: 'flex',
            flexDirection: 'column',
        },
        block1: {
            width: '100%',
            display: 'flex',
        },
        backImage: {
            width: '100%',
            height: '55vw',
        },
        headerTxtBlock: {
            marginTop: '22%',
            paddingLeft: '2vw',
        },
        headerTxt: {
            fontWeight:'300',
            lineHeight: '12vw',
            letterSpacing: '2vw',
            paddingBottom: 200,

            textAlign: 'left',
            color: 'white',
            backgroundColor: 'rgba(141, 116, 200,0.3);',
            fontSize: '10vw',
        },
        imagesBlock: {
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: '5vw',
            paddingBottom: '7vw',
            marginBottom: '1vw',
            position: 'relative',
            display: 'grid',
            top: '-10%',
            gridTemplateColumns: '20% 20% 20% 20%',
            justifyContent: 'space-around',
        },
        img: {
            width: '80%',
            height: '20vw',
            margin: 'auto',
        },
        linksBlock: {
            marginTop: 0,
            height: 200,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            paddingLeft: '2vw'

        },
        linksBlockTitle: {
            fontWeight: '600',
            color: 'black',
            fontSize: '7vw',            
        },
        links: {
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            overflowX: 'scroll',
            whiteSpace: 'nowrap',
        },
        linksItem: {
            marginRight: 20,
            margin: 2,
            padding: '3vw',
            width: '37vw',
            height: '37vw',
            borderRadius: '10%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        linksTxt: {
            
            color: 'white',
            fontSize: '4vw',
        },
        linksImage: {
            width: '15vw',
            height: '15vw',
        },
        containterStat: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10vw',
            marginBottom: '10vw',
            width: '90vw',
            margin: 'auto',
            border: '1vw solid white',
            borderRadius: '3vw',
            backgroundColor: 'rgba(255,255,255,0.3)'

        },
        imgStatBlock: {
            height: '20vw',
            borderRadius: '10%',
        },
        imgStat: {
            width: '20vw',
            height: '20vw',
            backgroundColor: 'white',
            borderRadius: '10%',
        },

        contentStatBlock: {
            
            display: 'flex',
            width: '60vw',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        contentStatBlockHeader: {
            textAlign: 'center',
            fontSize: '5vw',
            color: 'white',
        },
        contentStat: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        contentStatText: {
            color: 'white',
            fontSize: '3.5vw',
            textAlign: 'center'
        }
    })

    return(styles)
}


