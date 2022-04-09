#!/usr/bin/env node

// Викторина по солнечной системе

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Викторина по солнечной системе\n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('КАК ИГРАТЬ')}
    Первый неправильный ответ приведет к ${chalk.bgRed('закрытию')} программы
    Так что постарайтесь отвечать правильно!
  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Проверяю ответ...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Отлично ${playerName}. Это правильный ответ` });
  } else {
    spinner.error({ text: `Ответ неверный, ты проиграл ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'Как тебя зовут?'
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Поздравляю , ${playerName} !\n Юра тобой бы гордился!`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Какая планета ближайшая к Солнцу?\n',
    choices: ['Земля', 'Меркурий', 'Нептун', 'Венера'],
  });

  return handleAnswer(answers.question_1 === 'Меркурий');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Из чего в основном состоит Солнце?\n',
      choices: ['Жидкая лава', 'Газ', 'Скала', 'Расплавленное железо'],
  });
  return handleAnswer(answers.question_2 === 'Газ');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: `Где находится пояс астероидов?\n`,
        choices: [
            'Между Землей и Венерой',
            'Между Юпитером и Сатурном',
            'Между Марсом и Юпитером',
            'Между Землей и Марсом'
        ],
    });
  return handleAnswer(answers.question_3 === 'undefined');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'Сколько лун у Марса?\n',
    choices: ['13', '2', '50', '1'],
  });
  return handleAnswer(answers.question_4 === '2');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message: 'Самый большой вулкан в Солнечной системе называется Олимп. Где он?\n',
      choices: ['Марс', 'Земля', 'Юпитер', 'Венера'],
  });
  return handleAnswer(answers.question_5 === 'Марс');
}

async function question6() {
    const answers = await inquirer.prompt({
      name: 'question_6',
      type: 'list',
      message: 'Что из этого лучше всего описывает атмосферу, окружающую Венеру?\n',
        choices: ['Холодная и снежная', 'Горячая и ядовитая', 'Холодная и влажная', 'Яркая и теплая']
    });
    return handleAnswer(answers.question_6 === 'Горячая и ядовитая');
}
  
async function question7() {
    const answers = await inquirer.prompt({
      name: 'question_7',
      type: 'list',
      message: 'Из чего в основном состоят кометы?\n',
        choices: ['Грязный лед и пыль', 'Ядовитая жидкость', 'Горячий жидкий камень', 'Ржавый металл'],
    });
    return handleAnswer(answers.question_7 === 'Грязный лед и пыль');
}
  
async function question8() {
    const answers = await inquirer.prompt({
      name: 'question_8',
      type: 'list',
      message: 'Какая из этих планет самая маленькая?\n',
        choices: ['Уран', 'Земля', 'Юпитер', 'Меркурий'],
    });
  
    return handleAnswer(answers.question_8 === 'Меркурий');
}
  
async function question9() {
    const answers = await inquirer.prompt({
      name: 'question_9',
      type: 'list',
      message: 'Что такое Большое красное пятно на Юпитере?\n',
        choices: ['Буря', 'Кратер', 'Озеро', 'Вулкан'],
    });
  
    return handleAnswer(answers.question_9 === 'Буря');
}
  
async function question10() {
    const answers = await inquirer.prompt({
      name: 'question_10',
      type: 'list',
      message: 'К какой планете принадлежат спутники Оберон и Титания?\n',
        choices: ['Земля', 'Уран', 'Юпитер', 'Венера'],
    });
  
    return handleAnswer(answers.question_10 === 'Уран');
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
winner();