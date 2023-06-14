const modalMessages = (systolic, diastolic, pulse) => {
    if(systolic >= 180 || diastolic >= 120) {
        return {
            title: 'Hypertension Crisis!', 
            message: 'Warning! You are experiencing hypertension crisis! Your blood pressure is extremely high! You should seek immediate help! Try calling 112 or have someone close to you call for an ambulance! Try to relax and stay calm. Take an aspirin to lower the possibilities of a stroke or a heart attack.'}
    }else if (systolic >= 140 || diastolic >= 90) {
        return {
            title: 'Hypertension Stage II', 
            message: 'Warning! These measurements indicate that you are in a state called Hypertension Stage II. Your blood pressure is highly elevated. Try to relax and calm yourself and do consider a visit to your health provider in the next few days!'}
    } else if ((systolic >= 130 && systolic < 139)  || (diastolic > 85 && diastolic < 89)) {
        return {
            title: 'Hypertension Stage I', 
            message: 'Beware! These measurements indicate that you are in a state called Hypertension Stage I. Your blood pressure is high. Try to relax and calm yourself and do consider a visit to your health provider in the near future!'}
    } else if ((systolic > 120 && systolic < 129) ||  (diastolic > 80 && diastolic <= 85)) {
        return {
            title: 'Blood pressure is elevated', 
            message: 'These measurements indicate that your blood pressure is slightly above what is considered a normal and safe blood pressure. Try to exercise a bit more, to get some good sleep and consider a heart-healthy diet. Continue taking your blood pressure and if it doesn`t drop or goes higher, conider a visit to your health provider to get checked.'}
    } else if ((systolic > 90 && systolic <= 120) && (diastolic > 60 && diastolic <= 80)) {
        return {
            title: 'Blood pressure is normal', 
            message: 'These measurements indicate that your blood pressure is normal and safe.'}
    } else if (systolic <= 90 && diastolic <= 60) {
        return {
            title: 'Blood pressure is low', 
            message: 'These measurements indicate that your blood pressure is low. Usually that is not a problem. You can elevate it with some chocolate or a cup of coffee. Usually low blood pressure is not a problem, but if it persists, it might be a good idea to visit your health provider to check things out.'}
    }
}
export default modalMessages;