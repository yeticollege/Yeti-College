import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

// --- STYLES ---
const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        color: '#333',
        lineHeight: 1.5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#0f172a', // Dark slate
        paddingBottom: 15,
    },
    logoBlock: {
        flexDirection: 'column',
    },
    universityName: {
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#0f172a',
        letterSpacing: 1,
    },
    subHeader: {
        fontSize: 10,
        color: '#64748b', // Slate 500
        marginTop: 4,
    },
    badge: {
        backgroundColor: '#0f172a',
        color: '#ffffff',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 'bold',
    },
    mainSection: {
        flexDirection: 'row',
        marginBottom: 30,
        gap: 20,
    },
    summaryBlock: {
        flex: 1,
        backgroundColor: '#f8fafc', // Slate 50
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    photoBlock: {
        width: 120,
        height: 140,
        backgroundColor: '#f1f5f9',
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    applicantImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingBottom: 6,
        textTransform: 'uppercase',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    fieldGroup: {
        width: '48%', // Roughly 2 columns
        marginBottom: 8,
    },
    fieldGroupFull: {
        width: '100%',
        marginBottom: 8,
    },
    label: {
        fontSize: 9,
        color: '#64748b',
        marginBottom: 2,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    value: {
        fontSize: 11,
        color: '#0f172a',
        fontWeight: 'medium',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
        paddingBottom: 2,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        borderTopWidth: 1,
        borderTopColor: '#e2e8f0',
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerText: {
        fontSize: 9,
        color: '#94a3b8',
    },
    declaration: {
        fontSize: 9,
        color: '#64748b',
        marginTop: 30,
        fontStyle: 'italic',
        textAlign: 'justify',
        backgroundColor: '#f8fafc',
        padding: 10,
        borderRadius: 4,
    }
});

// --- TYPES ---
interface ApplicationData {
    // Personal
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    address: string;
    // Education
    prevInstitute: string;
    board: string;
    gpa: string;
    // Selection
    courseId: string;
    courseName?: string;
    code?: string;
}

interface Props {
    data: ApplicationData;
    photoUrl?: string; // Expecting a Data URI (data:image/jpeg;base64,...)
}

// --- COMPONENT ---
export const ApplicationDocument = ({ data, photoUrl }: Props) => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* HEADER */}
                <View style={styles.header}>
                    <View style={styles.logoBlock}>
                        <Text style={styles.universityName}>Academia University</Text>
                        <Text style={styles.subHeader}>Excellence in Education • Established 1995</Text>
                    </View>
                    <View>
                        <Text style={styles.badge}>FALL INTAKE 2025</Text>
                    </View>
                </View>

                {/* TOP SECTION: SUMMARY & PHOTO */}
                <View style={styles.mainSection}>
                    <View style={styles.summaryBlock}>
                        <Text style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>SELECTED PROGRAM</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#0f172a', marginBottom: 15 }}>
                            {data.courseName || data.courseId}
                            {data.code ? ` (${data.code})` : ''}
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={styles.label}>Application ID</Text>
                                <Text style={styles.value}>#{randomId}</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Date Applied</Text>
                                <Text style={styles.value}>{currentDate}</Text>
                            </View>
                        </View>
                    </View>

                    {/* PHOTO BOX */}
                    <View style={styles.photoBlock}>
                        {photoUrl ? (
                            <Image src={photoUrl} style={styles.applicantImage} />
                        ) : (
                            <Text style={{ fontSize: 9, color: '#94a3b8', textAlign: 'center' }}>
                                Photo Not Available
                            </Text>
                        )}
                    </View>
                </View>

                {/* PERSONAL DETAILS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Applicant Information</Text>
                    <View style={styles.grid}>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>First Name</Text>
                            <Text style={styles.value}>{data.firstName}</Text>
                        </View>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>Last Name</Text>
                            <Text style={styles.value}>{data.lastName}</Text>
                        </View>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>Date of Birth</Text>
                            <Text style={styles.value}>{data.dob}</Text>
                        </View>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>Phone Number</Text>
                            <Text style={styles.value}>{data.phone}</Text>
                        </View>
                        <View style={styles.fieldGroupFull}>
                            <Text style={styles.label}>Email Address</Text>
                            <Text style={styles.value}>{data.email}</Text>
                        </View>
                        <View style={styles.fieldGroupFull}>
                            <Text style={styles.label}>Permanent Address</Text>
                            <Text style={styles.value}>{data.address}</Text>
                        </View>
                    </View>
                </View>

                {/* ACADEMIC HISTORY */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Academic Background</Text>
                    <View style={styles.grid}>
                        <View style={styles.fieldGroupFull}>
                            <Text style={styles.label}>Previous Institution</Text>
                            <Text style={styles.value}>{data.prevInstitute}</Text>
                        </View>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>Board / University</Text>
                            <Text style={styles.value}>{data.board}</Text>
                        </View>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>GPA / Percentage</Text>
                            <Text style={styles.value}>{data.gpa}</Text>
                        </View>
                    </View>
                </View>

                {/* DECLARATION */}
                <View style={styles.declaration}>
                    <Text>
                        I hereby certify that the information provided in this application is accurate and complete to the best of my knowledge. I understand that any misrepresentation may result in the rejection of this application or dismissal from the program. I agree to abide by the rules and regulations of the institution.
                    </Text>
                </View>

                {/* SIGNATURE SPACE */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, paddingHorizontal: 20 }}>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#333', width: 150, paddingTop: 5 }}>
                        <Text style={{ fontSize: 9, textAlign: 'center' }}>Applicant Signature</Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#333', width: 150, paddingTop: 5 }}>
                        <Text style={{ fontSize: 9, textAlign: 'center' }}>Authorized Signatory</Text>
                    </View>
                </View>

                {/* FOOTER */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Generated via Online Admissions Portal</Text>
                    <Text style={styles.footerText}>{currentDate} • Page 1 of 1</Text>
                </View>

            </Page>
        </Document>
    );
};