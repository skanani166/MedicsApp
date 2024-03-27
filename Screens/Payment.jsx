import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { CardField, StripeProvider, useStripe } from '@stripe/stripe-react-native';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCVC] = useState('');
  const stripe = useStripe();

  const handlePayment = async () => {
    try {
      const { paymentIntent, error } = await stripe.confirmPayment({
        paymentMethod: {
          card: {
            number: cardNumber,
            expMonth: expiryMonth,
            expYear: expiryYear,
            cvc,
          },
        },
      });

      if (error) {
        console.error('Error processing payment:', error);
        Alert.alert('Payment failed');
      } else {
        console.log('Payment successful:', paymentIntent);
        Alert.alert('Payment successful');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      Alert.alert('Payment failed');
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: 'Card Number',
          expiration: 'MM/YY',
          cvc: 'CVC',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          setCardNumber(cardDetails?.number ?? '');
          setExpiryMonth(cardDetails?.expMonth ?? '');
          setExpiryYear(cardDetails?.expYear ?? '');
          setCVC(cardDetails?.cvc ?? '');
        }}
      />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

export default Payment;