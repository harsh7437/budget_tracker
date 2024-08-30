import { useContext } from "react";
import { ExpenseTrackerContext } from "./Components/Context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);

    const rightTransactions = transactions.filter((t) => t.type === title);

    //reduce is similat to map and forEach
    const total = rightTransactions.reduce((accum, currVal) => accum + currVal.amount, 0);  //totaling in either income or expense

    const categories = title === 'Income' ? incomeCategories : expenseCategories;
    // specifying the cateogry (incomeCateogries of expenseCateogries)

    rightTransactions.forEach((t) => {
        
        const category = categories.find((c) => c.type === t.category)

        if (category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((sc) => sc.amount > 0);
    //filtering out only the valid amount cateogries, not zero amount caterogry


    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type),
    };

    return { total, chartData };
}

export default useTransactions;
