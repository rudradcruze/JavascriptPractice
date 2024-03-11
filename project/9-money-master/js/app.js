document.getElementById('calculate').addEventListener('click', function (){
    const income = getInputValueById('income');
    const foodExpenses = getInputValueById('food');
    const rentExpenses = getInputValueById('rent');
    const clothesExpenses = getInputValueById('clothes');
    
    const expenses = foodExpenses + rentExpenses + clothesExpenses;
    const balance = income - expenses;

    setValue('totalExpenses', expenses);
    setValue('totalBalance', balance);
})

document.getElementById('save').addEventListener('click', function () {
    const previousBalance = getTextValueById('totalBalance');
    const savingPercentage = getInputValueById('savingPercentage');
    const save = Math.round(previousBalance * savingPercentage / 100);
    const finalBalance = previousBalance - save;

    setValue('savingAmount', save);
    setValue('finalBanalce', finalBalance);
})