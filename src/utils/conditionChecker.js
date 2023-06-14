const conditionChecker = (systolic, diastolic) => {
    let condition;

    if(systolic >= 180 || diastolic >= 120) {
        condition = 'crisis';
    } else if (systolic >= 140 || diastolic >= 90) {
        condition = 'hypertensionTwo';

    } else if ((systolic >= 130 && systolic < 139)  || (diastolic > 85 && diastolic < 89)) {
        condition = 'hypertensionOne';

    } else if ((systolic > 120 && systolic < 129) ||  (diastolic > 80 && diastolic <= 85)) {
        condition = 'elevated';

    } else if ((systolic > 90 && systolic <= 120) && (diastolic > 60 && diastolic <= 80)) {
        condition = 'normal';

    } else if (systolic <= 90 && diastolic <= 60) {
        condition = 'low';
    }
    return condition;
}

export default conditionChecker;