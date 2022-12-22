import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Tipo, IconView, TipoText, ValorText } from './style';

export default function HistoricoList({ data, deleteItem }) {
    return (

        <TouchableWithoutFeedback onLongPress={ () => deleteItem(data)} >
            <Container>
                <Tipo>

                    <IconView tipo={data.tipo}>
                        <Icon
                            name={data.tipo === 'despesa' ? 'chevron-down' : 'chevron-up'}
                            color="#FFF"
                            size={20}
                        />
                        <TipoText>{data.tipo}</TipoText>
                    </IconView>

                </Tipo>

                <ValorText> R$ {data.valor}</ValorText>
                   
            </Container>
        </TouchableWithoutFeedback>
    );
}