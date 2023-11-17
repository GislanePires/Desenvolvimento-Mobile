import React, { } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles2";
// import Icon from "react-native-vector-icons/AntDesign";

const App = () => {
  
  

    return (
        <View style={styles.container}>
            <View style={styles.header}>           
                <View>
                <Text style={styles.textHeader}>Histórico de Faturas</Text>
                </View>

            </View>
                <View>
                    <Text style={styles.textList}>Filtrar Lista > </Text>
                </View>
                <View style={styles.invoices}>
                    <ScrollView>
                        
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>09/11/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 121,53</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>09/10/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 109,40</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>11/09/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 8,17</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>09/08/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 8,17</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>17/07/2023</Text>
                            <View>
                        <Text style={styles.value}>43,58</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>09/06/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 51,60</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>09/03/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 58,59</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>09/02/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 116,48</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.invoicelist}>
                        <View>
                            <Text style={styles.date}>09/01/2023</Text>
                            <View>
                        <Text style={styles.value}>R$ 118,86</Text>
                                <Text style={styles.quit}>PAGO</Text>
                            </View>
                        </View>
                        
                    </View>
                    </ScrollView>
                </View>
        </View>
    );
  };
  export default App;
  
  
  
  