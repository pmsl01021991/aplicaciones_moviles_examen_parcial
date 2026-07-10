import { Alert, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { useReserva } from "../presentation/context/ReservaContext";
import useReservaForm from "../presentation/hooks/useReservaForm";
import RegisterHeader from "../presentation/components/Register/RegisterHeader";
import CustomTextInput from "../presentation/components/shared/CustomTextInput";
import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import { COLORS } from "../presentation/utils/color";

export default function EditarReserva() {

    const { id } = useLocalSearchParams();

    const router = useRouter();

    const { reservas, dispatch } = useReserva();

    const reserva = reservas.find(item => item.id === id);

    const {

        cliente,
        telefono,
        mesa,
        plato,
        comensales,

        prioridad,
        estado,

        errors,

        setCliente,
        setTelefono,
        setMesa,
        setPlato,
        setComensales,
        setPrioridad,
        setEstado,

        validar

    } = useReservaForm();

    useEffect(() => {

        if (reserva) {

            setCliente(reserva.cliente);

            setTelefono(reserva.telefono);

            setMesa(reserva.mesa);

            setPlato(reserva.plato);

            setComensales(reserva.comensales.toString());

            setPrioridad(reserva.prioridad);

            setEstado(reserva.estado);

        }

    }, []);

    const actualizarReserva = () => {

        if (!validar()) return;

        dispatch({

            type: "UPDATE",

            payload: {

                id: reserva!.id,

                cliente,

                telefono,

                mesa,

                plato,

                comensales: Number(comensales),

                prioridad,

                estado,

                fecha: reserva!.fecha,

                hora: reserva!.hora

            }

        });

        Alert.alert(

            "Correcto",

            "Reserva actualizada.",

            [

                {

                    text: "Aceptar",

                    onPress: () => router.back()

                }

            ]

        );

    };

    if (!reserva) return null;

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView contentContainerStyle={styles.content}>

                <RegisterHeader />

                <CustomTextInput

                    label="Cliente"

                    value={cliente}

                    onChangeText={setCliente}

                    error={errors.cliente}

                />

                <CustomTextInput

                    label="Teléfono"

                    value={telefono}

                    keyboardType="numeric"

                    onChangeText={setTelefono}

                    error={errors.telefono}

                />

                <CustomTextInput

                    label="Mesa"

                    value={mesa}

                    onChangeText={setMesa}

                    error={errors.mesa}

                />

                <CustomTextInput

                    label="Plato"

                    value={plato}

                    onChangeText={setPlato}

                    error={errors.plato}

                />

                <CustomTextInput

                    label="Comensales"

                    value={comensales}

                    keyboardType="numeric"

                    onChangeText={setComensales}

                />

                <PrimaryButton

                    title="Guardar Cambios"

                    onPress={actualizarReserva}

                />

            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: COLORS.background

    },

    content: {

        padding: 20,

        paddingBottom: 50

    }

});