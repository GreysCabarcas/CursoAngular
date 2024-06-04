const skills: string[] = ['Bash','Counter','Healing'];

interface Character {
    name: string;
    hp: number;
    skill: string [];
    hometown?: string; 
}
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skill: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell'
console.table ({strider});