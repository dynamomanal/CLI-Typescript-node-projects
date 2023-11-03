import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
export const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));
export async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Welcome to the Dungeon Adventure Game');
    await sleep();
    console.log(`
    ${chalk.bgCyan('Instructions')}
    ${chalk.redBright('You have following enemies ')}
    ${chalk.blue('1.')} 'Skeleton', 'Warrior', 'Assasin'.
    ${chalk.blue('2.')} You will be given Three choices .
    ${chalk.blue('3.')} Drink Health Potions.
    ${chalk.blue('4.')} Run.
    ${chalk.blue('5.')} Attack.
    ${chalk.blue('6.')} Everytime you attack you will loose health.
    ${chalk.blue('7.')} You can also run away from Enemy.
    ${chalk.blue('8.')} Are you Ready , For the adventure.
  `);
    rainbowTitle.stop();
    await sleep(1000);
}
