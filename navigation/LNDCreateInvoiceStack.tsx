import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LNDCreateInvoiceComponent,
  SelectWalletComponent,
  LNDViewInvoiceComponent,
  LNDViewAdditionalInvoiceInformationComponent,
  LNDViewAdditionalInvoicePreImageComponent,
} from './LazyLoadLNDCreateInvoiceStack';
import { useTheme } from '../components/themes';
import navigationStyle from '../components/navigationStyle';
import loc from '../loc';

const Stack = createNativeStackNavigator();

const LNDCreateInvoiceRoot = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="LNDCreateInvoice"
        component={LNDCreateInvoiceComponent}
        options={navigationStyle({
          title: loc.receive.header,
          closeButton: true,
          headerBackVisible: false,
          statusBarStyle: 'light',
        })(theme)}
      />
      <Stack.Screen
        name="SelectWallet"
        component={SelectWalletComponent}
        options={navigationStyle({ title: loc.wallets.select_wallet })(theme)}
      />
      <Stack.Screen
        name="LNDViewInvoice"
        component={LNDViewInvoiceComponent}
        options={navigationStyle({
          statusBarStyle: 'auto',
          headerTitle: loc.lndViewInvoice.lightning_invoice,
          headerStyle: {
            backgroundColor: theme.colors.customHeader,
          },
        })(theme)}
      />
      <Stack.Screen
        name="LNDViewAdditionalInvoiceInformation"
        component={LNDViewAdditionalInvoiceInformationComponent}
        options={navigationStyle({ title: loc.lndViewInvoice.additional_info })(theme)}
      />
      <Stack.Screen
        name="LNDViewAdditionalInvoicePreImage"
        component={LNDViewAdditionalInvoicePreImageComponent}
        options={navigationStyle({ title: loc.lndViewInvoice.additional_info })(theme)}
      />
    </Stack.Navigator>
  );
};

export default LNDCreateInvoiceRoot;