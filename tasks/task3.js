// Маємо об'єкт з інформацією про види спорту, кількість представників і кількість медалей. 
// Необхідно додати нове поле percentOfSuccess, яке буде показувати відсоток завойованих медалей від загальної кількості спортсменів у кожному виді спорту.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."
"Можливо в цій задачі доведеться в методі map розкривати фігурні дужки для роботи з обʼєктом."
// Щось тиру Array.map(item => {
//   blablabla
//  .. return ЩОСЬ)
// })
"Для заокруглення числа можна до десятих використовуйте .toFixed(1)"

function addSuccessPercent(olympicRepresentation) {
  
  const result = olympicRepresentation.map(item => {
    let successPercent;

    
    if (item.athletes === 0) {
      successPercent = 0;
    } else {
      successPercent = (item.medals / item.athletes) * 100;
    }

    const formattedPercent = successPercent.toFixed(1) + '%';

    // 4. Додаткова перевірка для випадку, коли очікується "0%" замість "0.0%"
    // Це потрібно для тесту, де медалі=0 та спортсмени=0, який очікує "0%"
    let finalPercent;
    if (item.athletes === 0 && item.medals === 0) {
      finalPercent = "0%";
    } else {
      finalPercent = formattedPercent;
    }


    // 5. Повертаємо новий об'єкт, додаючи нове поле percentOfSuccess
    return {
      ...item, // Копіюємо всі існуючі поля (sport, athletes, medals)
      percentOfSuccess: finalPercent // Додаємо нове обчислене поле-рядок
    };
  });

  return result;
}

const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
module.exports = addSuccessPercent;