// components/InvoicePDF.jsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { marginBottom: 10 },
    heading: { fontSize: 18, marginBottom: 10 },
    text: { fontSize: 12 },
});

const InvoicePDF = ({ formData, selectedPackage }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.heading}>EarthMeta Advisor - Invoice</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.text}>Name: {formData.name}</Text>
                <Text style={styles.text}>Project: {formData.projectName}</Text>
                <Text style={styles.text}>Email: {formData.email}</Text>
                <Text style={styles.text}>Timeline: {formData.timeline}</Text>
                <Text style={styles.text}>Budget: {formData.budget}</Text>
                <Text style={styles.text}>Selected Package: {selectedPackage}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.text}>Thank you for your order!</Text>
            </View>
        </Page>
    </Document>
);

export default InvoicePDF;
