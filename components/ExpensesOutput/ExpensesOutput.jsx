import { StyleSheet, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/style'


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date(2021, 12, 19),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date(2022, 1, 5),
    },
    {
        id: 'e3',
        description: 'Banana',
        amount: 5.99,
        date: new Date(2021, 12, 1),
    },
    {
        id: 'e4',
        description: 'A Book',
        amount: 14.99,
        date: new Date(2022, 2, 19),
    },
    {
        id: 'e5',
        description: 'A Book',
        amount: 18.59,
        date: new Date(2022, 2, 18),
    }, {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date(2021, 12, 19),
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date(2022, 1, 5),
    },
    {
        id: 'e8',
        description: 'Banana',
        amount: 5.99,
        date: new Date(2021, 12, 1),
    },
    {
        id: 'e9',
        description: 'A Book',
        amount: 14.99,
        date: new Date(2022, 2, 19),
    },
    {
        id: 'e10',
        description: 'A Book',
        amount: 18.59,
        date: new Date(2022, 2, 18),
    }
]
export default function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
})