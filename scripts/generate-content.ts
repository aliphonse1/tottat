/**
 * Content generation script for Tot & Tat
 * Generates all 7 packs with 20 units each
 * Run: npx tsx scripts/generate-content.ts
 */

import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const OUT_DIR = join(__dirname, '..', 'src', 'data', 'packs')

interface VocabItem { id: string; word: string; phonetic: string; meaning: string; meaningZh: string; example: string }
interface Exercise { id: string; type: string; instruction: string; [k: string]: any }
interface Lesson { id: string; title: string; objectives: string[]; vocabulary: VocabItem[]; listening: Exercise[]; speaking: Exercise[]; reading: Exercise[]; writing: Exercise[] }
interface Unit { id: string; title: string; theme: string; mascotTip: string; lessons: Lesson[] }
interface Pack { id: string; name: string; publisher: string; grade: string; version: string; units: Unit[] }

function writePack(pack: Pack) {
  writeFileSync(join(OUT_DIR, `${pack.id}.json`), JSON.stringify(pack, null, 2))
  console.log(`  ✓ ${pack.id}: ${pack.units.length} units, ${pack.units.reduce((s, u) => s + u.lessons[0].vocabulary.length, 0)} vocab words`)
}

// ============================================================
// P1 ENGLISH STARTER
// ============================================================
const p1Units: Unit[] = [
  { id: 'u1', title: 'Hello!', theme: 'greetings', mascotTip: 'Tat says: Let\'s say hello!', lessons: [{ id: 'u1-l1', title: 'Greetings', objectives: ['Say hello and goodbye', 'Introduce yourself'], vocabulary: [
    { id: 'v1', word: 'hello', phonetic: '/həˈloʊ/', meaning: 'a greeting', meaningZh: '你好', example: 'Hello! How are you?' },
    { id: 'v2', word: 'goodbye', phonetic: '/ɡʊdˈbaɪ/', meaning: 'said when leaving', meaningZh: '再見', example: 'Goodbye! See you tomorrow.' },
    { id: 'v3', word: 'name', phonetic: '/neɪm/', meaning: 'what you are called', meaningZh: '名字', example: 'My name is Amy.' },
    { id: 'v4', word: 'friend', phonetic: '/frend/', meaning: 'someone you like', meaningZh: '朋友', example: 'She is my friend.' },
    { id: 'v5', word: 'please', phonetic: '/pliːz/', meaning: 'used to be polite', meaningZh: '請', example: 'Can I have water, please?' },
    { id: 'v6', word: 'thank you', phonetic: '/θæŋk juː/', meaning: 'showing gratitude', meaningZh: '謝謝', example: 'Thank you for helping me.' },
  ], listening: [
    { id: 'l1', type: 'mcq', instruction: 'Listen. What is his name?', ttsText: 'Hello! My name is Tom.', question: 'What is his name?', options: ['Amy', 'Tom', 'Ben', 'Sam'], correctAnswer: 'Tom', hint: 'Listen for the name' },
    { id: 'l2', type: 'dictation', instruction: 'Listen and type:', ttsText: 'Hello!', correctAnswer: 'Hello', hint: 'A greeting word' },
    { id: 'l3', type: 'mcq', instruction: 'When do we say this?', ttsText: 'Goodbye! See you tomorrow.', question: 'When do we say goodbye?', options: ['When we arrive', 'When we leave', 'When we eat'], correctAnswer: 'When we leave', hint: 'Said when going away' },
  ], speaking: [
    { id: 's1', type: 'pronounce-word', instruction: 'Say:', targetText: 'hello', phonetic: '/həˈloʊ/' },
    { id: 's2', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'My name is Tom.', hint: 'Say your name!' },
  ], reading: [
    { id: 'r1', type: 'mcq', passage: 'Hello! I am Sam. I am six years old. I like dogs.', question: 'How old is Sam?', options: ['five', 'six', 'seven'], correctAnswer: 'six', explanation: 'Sam says I am six years old' },
  ], writing: [
    { id: 'w1', type: 'spelling', instruction: 'Spell:', ttsText: 'hello', correctAnswer: 'hello', hint: '5 letters, starts with h' },
    { id: 'w2', type: 'sentence-order', instruction: 'Order:', words: ['name', 'my', 'is', 'Sam'], correctAnswer: 'my name is Sam', hint: 'Start with my' },
  ] }] },
  { id: 'u2', title: 'Colours', theme: 'colours', mascotTip: 'Tot says: The world is colourful!', lessons: [{ id: 'u2-l1', title: 'Rainbow Colours', objectives: ['Learn colour names', 'Describe things'], vocabulary: [
    { id: 'v7', word: 'red', phonetic: '/red/', meaning: 'colour of fire', meaningZh: '紅色', example: 'The apple is red.' },
    { id: 'v8', word: 'blue', phonetic: '/bluː/', meaning: 'colour of sky', meaningZh: '藍色', example: 'The sky is blue.' },
    { id: 'v9', word: 'green', phonetic: '/ɡriːn/', meaning: 'colour of grass', meaningZh: '綠色', example: 'The tree is green.' },
    { id: 'v10', word: 'yellow', phonetic: '/ˈjeloʊ/', meaning: 'colour of sun', meaningZh: '黃色', example: 'The sun is yellow.' },
    { id: 'v11', word: 'orange', phonetic: '/ˈɒrɪndʒ/', meaning: 'between red and yellow', meaningZh: '橙色', example: 'The orange is orange.' },
    { id: 'v12', word: 'purple', phonetic: '/ˈpɜːrpl/', meaning: 'mix of red and blue', meaningZh: '紫色', example: 'I like purple flowers.' },
  ], listening: [
    { id: 'l4', type: 'mcq', instruction: 'What colour?', ttsText: 'Look at the sky. It is blue.', question: 'What colour is the sky?', options: ['red', 'blue', 'green'], correctAnswer: 'blue', hint: 'Listen for the colour' },
    { id: 'l5', type: 'dictation', instruction: 'Type:', ttsText: 'It is red.', correctAnswer: 'It is red', hint: 'A colour sentence' },
  ], speaking: [
    { id: 's3', type: 'pronounce-word', instruction: 'Say:', targetText: 'purple', phonetic: '/ˈpɜːrpl/' },
    { id: 's4', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'The sky is blue.', hint: 'Clear and short' },
  ], reading: [
    { id: 'r2', type: 'mcq', passage: 'I see a rainbow! It has red, orange, yellow, green, blue and purple.', question: 'How many colours?', options: ['four', 'five', 'six'], correctAnswer: 'six', explanation: 'Six colours listed' },
  ], writing: [
    { id: 'w3', type: 'spelling', instruction: 'Spell:', ttsText: 'blue', correctAnswer: 'blue', hint: '4 letters, colour of sky' },
    { id: 'w4', type: 'sentence-order', instruction: 'Order:', words: ['is', 'red', 'the', 'apple'], correctAnswer: 'the apple is red', hint: 'Start with the' },
  ] }] },
  { id: 'u3', title: 'Numbers 1-10', theme: 'numbers', mascotTip: 'Tat says: Let\'s count!', lessons: [{ id: 'u3-l1', title: 'Counting to Ten', objectives: ['Count 1-10', 'Use numbers'], vocabulary: [
    { id: 'v13', word: 'one', phonetic: '/wʌn/', meaning: '1', meaningZh: '一', example: 'I have one nose.' },
    { id: 'v14', word: 'three', phonetic: '/θriː/', meaning: '3', meaningZh: '三', example: 'I have three books.' },
    { id: 'v15', word: 'five', phonetic: '/faɪv/', meaning: '5', meaningZh: '五', example: 'I have five fingers.' },
    { id: 'v16', word: 'seven', phonetic: '/ˈsevn/', meaning: '7', meaningZh: '七', example: 'There are seven days.' },
    { id: 'v17', word: 'nine', phonetic: '/naɪn/', meaning: '9', meaningZh: '九', example: 'I wake up at nine.' },
    { id: 'v18', word: 'ten', phonetic: '/ten/', meaning: '10', meaningZh: '十', example: 'I have ten toes.' },
  ], listening: [
    { id: 'l6', type: 'mcq', instruction: 'How many?', ttsText: 'I have three cats.', question: 'How many cats?', options: ['two', 'three', 'four'], correctAnswer: 'three', hint: 'Listen for the number' },
    { id: 'l7', type: 'dictation', instruction: 'Type the number word:', ttsText: 'seven', correctAnswer: 'seven', hint: 'Between six and eight' },
  ], speaking: [
    { id: 's5', type: 'pronounce-word', instruction: 'Say:', targetText: 'seven', phonetic: '/ˈsevn/' },
    { id: 's6', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'I am six years old.', hint: 'Nice and clear' },
  ], reading: [
    { id: 'r3', type: 'mcq', passage: 'I have five pencils and two erasers in my pencil case.', question: 'How many pencils?', options: ['three', 'five', 'seven'], correctAnswer: 'five', explanation: 'Five pencils' },
  ], writing: [
    { id: 'w5', type: 'spelling', instruction: 'Spell:', ttsText: 'eight', correctAnswer: 'eight', hint: '5 letters, has gh' },
    { id: 'w6', type: 'fill-blank', instruction: 'I have _____ fingers on each hand.', correctAnswer: 'five', hint: 'Count them!' },
  ] }] },
  { id: 'u4', title: 'My Body', theme: 'body', mascotTip: 'Tot says: Touch your nose!', lessons: [{ id: 'u4-l1', title: 'Head to Toes', objectives: ['Name body parts', 'Follow instructions'], vocabulary: [
    { id: 'v19', word: 'head', phonetic: '/hed/', meaning: 'top of body', meaningZh: '頭', example: 'I wear a hat on my head.' },
    { id: 'v20', word: 'eyes', phonetic: '/aɪz/', meaning: 'you see with these', meaningZh: '眼睛', example: 'I have two eyes.' },
    { id: 'v21', word: 'nose', phonetic: '/noʊz/', meaning: 'you smell with this', meaningZh: '鼻子', example: 'I smell with my nose.' },
    { id: 'v22', word: 'mouth', phonetic: '/maʊθ/', meaning: 'you eat with this', meaningZh: '嘴巴', example: 'I eat with my mouth.' },
    { id: 'v23', word: 'hands', phonetic: '/hændz/', meaning: 'end of your arms', meaningZh: '手', example: 'Wash your hands.' },
    { id: 'v24', word: 'feet', phonetic: '/fiːt/', meaning: 'end of your legs', meaningZh: '腳', example: 'I have two feet.' },
  ], listening: [
    { id: 'l8', type: 'mcq', instruction: 'What body part?', ttsText: 'I can see with these. I have two.', question: 'What are they?', options: ['ears', 'eyes', 'hands'], correctAnswer: 'eyes', hint: 'Used to see' },
    { id: 'l9', type: 'dictation', instruction: 'Type:', ttsText: 'I have two hands.', correctAnswer: 'I have two hands', hint: 'Body part' },
  ], speaking: [
    { id: 's7', type: 'pronounce-word', instruction: 'Say:', targetText: 'mouth', phonetic: '/maʊθ/' },
    { id: 's8', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'I have two eyes.', hint: 'Clear!' },
  ], reading: [
    { id: 'r4', type: 'mcq', passage: 'My face has two eyes, one nose and one mouth. My eyes are brown.', question: 'What colour are the eyes?', options: ['blue', 'brown', 'green'], correctAnswer: 'brown', explanation: 'Eyes are brown' },
  ], writing: [
    { id: 'w7', type: 'spelling', instruction: 'Spell:', ttsText: 'mouth', correctAnswer: 'mouth', hint: '5 letters' },
    { id: 'w8', type: 'sentence-order', instruction: 'Order:', words: ['have', 'I', 'two', 'eyes'], correctAnswer: 'I have two eyes', hint: 'Start with I' },
  ] }] },
  { id: 'u5', title: 'My Family', theme: 'family', mascotTip: 'Tat says: Who is in your family?', lessons: [{ id: 'u5-l1', title: 'Family Words', objectives: ['Name family members'], vocabulary: [
    { id: 'v25', word: 'mum', phonetic: '/mʌm/', meaning: 'mother', meaningZh: '媽媽', example: 'I love my mum.' },
    { id: 'v26', word: 'dad', phonetic: '/dæd/', meaning: 'father', meaningZh: '爸爸', example: 'My dad is tall.' },
    { id: 'v27', word: 'sister', phonetic: '/ˈsɪstər/', meaning: 'female sibling', meaningZh: '姐妹', example: 'My sister is four.' },
    { id: 'v28', word: 'brother', phonetic: '/ˈbrʌðər/', meaning: 'male sibling', meaningZh: '兄弟', example: 'My brother plays football.' },
    { id: 'v29', word: 'baby', phonetic: '/ˈbeɪbi/', meaning: 'very young child', meaningZh: '嬰兒', example: 'The baby is cute.' },
    { id: 'v30', word: 'family', phonetic: '/ˈfæmɪli/', meaning: 'parents and children', meaningZh: '家庭', example: 'I love my family.' },
  ], listening: [
    { id: 'l10', type: 'mcq', instruction: 'Who?', ttsText: 'My mum makes breakfast every day.', question: 'Who makes breakfast?', options: ['Dad', 'Mum', 'Sister'], correctAnswer: 'Mum', hint: 'Listen carefully' },
    { id: 'l11', type: 'dictation', instruction: 'Type:', ttsText: 'I love my family.', correctAnswer: 'I love my family', hint: 'About your family' },
  ], speaking: [
    { id: 's9', type: 'pronounce-word', instruction: 'Say:', targetText: 'family', phonetic: '/ˈfæmɪli/' },
    { id: 's10', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'I love my mum and dad.', hint: 'With feeling!' },
  ], reading: [
    { id: 'r5', type: 'mcq', passage: 'My family is small. There is Mum, Dad, my sister and me. We live in a flat.', question: 'How many people?', options: ['three', 'four', 'five'], correctAnswer: 'four', explanation: 'Mum, Dad, sister, me = 4' },
  ], writing: [
    { id: 'w9', type: 'spelling', instruction: 'Spell:', ttsText: 'family', correctAnswer: 'family', hint: '6 letters' },
    { id: 'w10', type: 'fill-blank', instruction: 'I love my _____.', correctAnswer: 'family', hint: 'Mum, Dad, brothers, sisters' },
  ] }] },
  { id: 'u6', title: 'Fruits', theme: 'fruits', mascotTip: 'Tot says: Fruits are yummy and healthy!', lessons: [{ id: 'u6-l1', title: 'Tasty Fruits', objectives: ['Name common fruits', 'Describe taste'], vocabulary: [
    { id: 'v31', word: 'apple', phonetic: '/ˈæpl/', meaning: 'a round red or green fruit', meaningZh: '蘋果', example: 'The apple is sweet.' },
    { id: 'v32', word: 'banana', phonetic: '/bəˈnɑːnə/', meaning: 'a long yellow fruit', meaningZh: '香蕉', example: 'Monkeys like bananas.' },
    { id: 'v33', word: 'orange', phonetic: '/ˈɒrɪndʒ/', meaning: 'a round orange fruit', meaningZh: '橙', example: 'Orange juice is nice.' },
    { id: 'v34', word: 'grape', phonetic: '/ɡreɪp/', meaning: 'a small round fruit in bunches', meaningZh: '葡萄', example: 'I like purple grapes.' },
    { id: 'v35', word: 'watermelon', phonetic: '/ˈwɔːtərmelən/', meaning: 'a big green fruit, red inside', meaningZh: '西瓜', example: 'Watermelon is refreshing in summer.' },
    { id: 'v36', word: 'strawberry', phonetic: '/ˈstrɔːbəri/', meaning: 'a small red fruit with seeds', meaningZh: '草莓', example: 'Strawberries are sweet.' },
  ], listening: [
    { id: 'l12', type: 'mcq', instruction: 'What fruit?', ttsText: 'This fruit is long and yellow. Monkeys like it.', question: 'What is it?', options: ['apple', 'banana', 'orange'], correctAnswer: 'banana', hint: 'Long and yellow' },
    { id: 'l13', type: 'dictation', instruction: 'Type:', ttsText: 'I like apples.', correctAnswer: 'I like apples', hint: 'About a fruit' },
  ], speaking: [
    { id: 's11', type: 'pronounce-word', instruction: 'Say:', targetText: 'strawberry', phonetic: '/ˈstrɔːbəri/' },
    { id: 's12', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'I like eating bananas.', hint: 'Yummy!' },
  ], reading: [
    { id: 'r6', type: 'mcq', passage: 'At the fruit shop, I can see apples, oranges and bananas. Mum buys five apples and three oranges.', question: 'How many apples?', options: ['three', 'five', 'eight'], correctAnswer: 'five', explanation: 'Five apples' },
  ], writing: [
    { id: 'w11', type: 'spelling', instruction: 'Spell:', ttsText: 'banana', correctAnswer: 'banana', hint: '6 letters, has 3 a\'s' },
    { id: 'w12', type: 'sentence-order', instruction: 'Order:', words: ['like', 'I', 'eating', 'apples'], correctAnswer: 'I like eating apples', hint: 'Start with I' },
  ] }] },
  { id: 'u7', title: 'Animals', theme: 'animals', mascotTip: 'Tat says: Woof! Meow! What animals do you know?', lessons: [{ id: 'u7-l1', title: 'Pet Animals', objectives: ['Name common animals'], vocabulary: [
    { id: 'v37', word: 'dog', phonetic: '/dɒɡ/', meaning: 'a common pet', meaningZh: '狗', example: 'The dog is friendly.' },
    { id: 'v38', word: 'cat', phonetic: '/kæt/', meaning: 'a furry pet', meaningZh: '貓', example: 'My cat is black.' },
    { id: 'v39', word: 'bird', phonetic: '/bɜːrd/', meaning: 'an animal with wings', meaningZh: '鳥', example: 'The bird can fly.' },
    { id: 'v40', word: 'fish', phonetic: '/fɪʃ/', meaning: 'lives in water', meaningZh: '魚', example: 'The fish swims fast.' },
    { id: 'v41', word: 'rabbit', phonetic: '/ˈræbɪt/', meaning: 'has long ears', meaningZh: '兔子', example: 'The rabbit hops.' },
    { id: 'v42', word: 'turtle', phonetic: '/ˈtɜːrtl/', meaning: 'has a hard shell', meaningZh: '烏龜', example: 'The turtle is slow.' },
  ], listening: [
    { id: 'l14', type: 'mcq', instruction: 'What animal?', ttsText: 'It has four legs and says woof. It is a pet.', question: 'What is it?', options: ['cat', 'dog', 'bird'], correctAnswer: 'dog', hint: 'Says woof' },
    { id: 'l15', type: 'dictation', instruction: 'Type:', ttsText: 'I have a cat.', correctAnswer: 'I have a cat', hint: 'About a pet' },
  ], speaking: [
    { id: 's13', type: 'pronounce-word', instruction: 'Say:', targetText: 'rabbit', phonetic: '/ˈræbɪt/' },
    { id: 's14', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'The dog is brown.', hint: 'Describe the animal' },
  ], reading: [
    { id: 'r7', type: 'mcq', passage: 'I have two pets. One is a cat and one is a fish. My cat is white. My fish is orange.', question: 'What colour is the cat?', options: ['orange', 'white', 'brown'], correctAnswer: 'white', explanation: 'The cat is white' },
  ], writing: [
    { id: 'w13', type: 'spelling', instruction: 'Spell:', ttsText: 'rabbit', correctAnswer: 'rabbit', hint: 'Double b' },
    { id: 'w14', type: 'fill-blank', instruction: 'The bird can _____.', correctAnswer: 'fly', hint: 'Birds do this in the sky' },
  ] }] },
  { id: 'u8', title: 'Food', theme: 'food', mascotTip: 'Tot says: What do you eat for lunch?', lessons: [{ id: 'u8-l1', title: 'Yummy Food', objectives: ['Name common foods'], vocabulary: [
    { id: 'v43', word: 'rice', phonetic: '/raɪs/', meaning: 'a white grain food', meaningZh: '飯', example: 'I eat rice every day.' },
    { id: 'v44', word: 'bread', phonetic: '/bred/', meaning: 'baked from flour', meaningZh: '麵包', example: 'I eat bread for breakfast.' },
    { id: 'v45', word: 'egg', phonetic: '/eɡ/', meaning: 'laid by a hen', meaningZh: '蛋', example: 'I like fried eggs.' },
    { id: 'v46', word: 'milk', phonetic: '/mɪlk/', meaning: 'a white drink from cows', meaningZh: '牛奶', example: 'I drink milk every morning.' },
    { id: 'v47', word: 'noodles', phonetic: '/ˈnuːdlz/', meaning: 'long thin strips', meaningZh: '麵條', example: 'Noodle soup is warm.' },
    { id: 'v48', word: 'chicken', phonetic: '/ˈtʃɪkɪn/', meaning: 'a common meat', meaningZh: '雞肉', example: 'I like chicken wings.' },
  ], listening: [
    { id: 'l16', type: 'mcq', instruction: 'What food?', ttsText: 'I drink this every morning. It is white and comes from cows.', question: 'What is it?', options: ['juice', 'milk', 'water'], correctAnswer: 'milk', hint: 'White, from cows' },
    { id: 'l17', type: 'dictation', instruction: 'Type:', ttsText: 'I like rice.', correctAnswer: 'I like rice', hint: 'A food' },
  ], speaking: [
    { id: 's15', type: 'pronounce-word', instruction: 'Say:', targetText: 'chicken', phonetic: '/ˈtʃɪkɪn/' },
    { id: 's16', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'I eat rice for dinner.', hint: 'About a meal' },
  ], reading: [
    { id: 'r8', type: 'mcq', passage: 'For breakfast, I have bread and milk. For lunch, I have rice and chicken.', question: 'What does the child eat for lunch?', options: ['bread', 'rice and chicken', 'noodles'], correctAnswer: 'rice and chicken', explanation: 'Rice and chicken for lunch' },
  ], writing: [
    { id: 'w15', type: 'spelling', instruction: 'Spell:', ttsText: 'bread', correctAnswer: 'bread', hint: '5 letters, rhymes with red' },
    { id: 'w16', type: 'sentence-order', instruction: 'Order:', words: ['eat', 'I', 'rice', 'for', 'dinner'], correctAnswer: 'I eat rice for dinner', hint: 'Start with I' },
  ] }] },
  { id: 'u9', title: 'Toys and Games', theme: 'toys', mascotTip: 'Tat says: What toys do you have?', lessons: [{ id: 'u9-l1', title: 'Play Time', objectives: ['Name toys', 'Talk about play'], vocabulary: [
    { id: 'v49', word: 'ball', phonetic: '/bɔːl/', meaning: 'round toy for playing', meaningZh: '球', example: 'Kick the ball!' },
    { id: 'v50', word: 'doll', phonetic: '/dɒl/', meaning: 'a toy person', meaningZh: '公仔', example: 'My doll has brown hair.' },
    { id: 'v51', word: 'puzzle', phonetic: '/ˈpʌzl/', meaning: 'a game to solve', meaningZh: '拼圖', example: 'I do a puzzle.' },
    { id: 'v52', word: 'robot', phonetic: '/ˈroʊbɒt/', meaning: 'a toy machine', meaningZh: '機器人', example: 'My robot can walk.' },
    { id: 'v53', word: 'kite', phonetic: '/kaɪt/', meaning: 'flies in the wind', meaningZh: '風箏', example: 'We fly kites in the park.' },
    { id: 'v54', word: 'teddy bear', phonetic: '/ˈtedi beər/', meaning: 'a soft toy bear', meaningZh: '泰迪熊', example: 'I sleep with my teddy bear.' },
  ], listening: [
    { id: 'l18', type: 'mcq', instruction: 'What toy?', ttsText: 'You can fly this in the park when it is windy.', question: 'What is it?', options: ['ball', 'kite', 'robot'], correctAnswer: 'kite', hint: 'Flies in the wind' },
    { id: 'l19', type: 'dictation', instruction: 'Type:', ttsText: 'I like my ball.', correctAnswer: 'I like my ball', hint: 'A round toy' },
  ], speaking: [
    { id: 's17', type: 'pronounce-word', instruction: 'Say:', targetText: 'puzzle', phonetic: '/ˈpʌzl/' },
    { id: 's18', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'I play with my robot.', hint: 'Fun!' },
  ], reading: [
    { id: 'r9', type: 'mcq', passage: 'In my toy box, I have a ball, a puzzle and two dolls. My favourite is the puzzle.', question: 'What is the favourite toy?', options: ['ball', 'doll', 'puzzle'], correctAnswer: 'puzzle', explanation: 'Favourite is the puzzle' },
  ], writing: [
    { id: 'w17', type: 'spelling', instruction: 'Spell:', ttsText: 'robot', correctAnswer: 'robot', hint: '5 letters' },
    { id: 'w18', type: 'fill-blank', instruction: 'We fly _____ in the park.', correctAnswer: 'kites', hint: 'They fly in the wind' },
  ] }] },
  { id: 'u10', title: 'Clothes', theme: 'clothes', mascotTip: 'Tot says: What are you wearing today?', lessons: [{ id: 'u10-l1', title: 'Getting Dressed', objectives: ['Name clothing', 'Describe what people wear'], vocabulary: [
    { id: 'v55', word: 'shirt', phonetic: '/ʃɜːrt/', meaning: 'worn on upper body', meaningZh: '恤衫', example: 'My shirt is white.' },
    { id: 'v56', word: 'trousers', phonetic: '/ˈtraʊzərz/', meaning: 'worn on legs', meaningZh: '褲子', example: 'I wear blue trousers.' },
    { id: 'v57', word: 'shoes', phonetic: '/ʃuːz/', meaning: 'worn on feet', meaningZh: '鞋', example: 'Put on your shoes.' },
    { id: 'v58', word: 'hat', phonetic: '/hæt/', meaning: 'worn on head', meaningZh: '帽子', example: 'Wear a hat in the sun.' },
    { id: 'v59', word: 'socks', phonetic: '/sɒks/', meaning: 'worn on feet under shoes', meaningZh: '襪子', example: 'My socks are pink.' },
    { id: 'v60', word: 'dress', phonetic: '/dres/', meaning: 'a one-piece for girls', meaningZh: '連衣裙', example: 'She wears a red dress.' },
  ], listening: [
    { id: 'l20', type: 'mcq', instruction: 'What?', ttsText: 'I wear these on my feet. I put them on before shoes.', question: 'What are they?', options: ['hat', 'socks', 'shirt'], correctAnswer: 'socks', hint: 'Before shoes, on feet' },
    { id: 'l21', type: 'dictation', instruction: 'Type:', ttsText: 'I wear a hat.', correctAnswer: 'I wear a hat', hint: 'About clothing' },
  ], speaking: [
    { id: 's19', type: 'pronounce-word', instruction: 'Say:', targetText: 'trousers', phonetic: '/ˈtraʊzərz/' },
    { id: 's20', type: 'pronounce-sentence', instruction: 'Say:', targetText: 'I am wearing a blue shirt.', hint: 'Describe your clothes' },
  ], reading: [
    { id: 'r10', type: 'mcq', passage: 'Today I wear my school uniform. I have a white shirt, grey trousers and black shoes.', question: 'What colour are the shoes?', options: ['white', 'grey', 'black'], correctAnswer: 'black', explanation: 'Black shoes' },
  ], writing: [
    { id: 'w19', type: 'spelling', instruction: 'Spell:', ttsText: 'shoes', correctAnswer: 'shoes', hint: '5 letters, worn on feet' },
    { id: 'w20', type: 'sentence-order', instruction: 'Order:', words: ['wearing', 'I', 'am', 'a', 'hat'], correctAnswer: 'I am wearing a hat', hint: 'Start with I am' },
  ] }] },
  // Units 11-20: more daily life topics
  ...generateSimpleUnits('p1', 11, [
    { title: 'At School', theme: 'school', words: ['teacher', 'desk', 'chair', 'book', 'pencil', 'ruler'] },
    { title: 'Weather', theme: 'weather', words: ['sunny', 'rainy', 'hot', 'cold', 'windy', 'cloudy'] },
    { title: 'Actions', theme: 'actions', words: ['run', 'jump', 'swim', 'read', 'write', 'draw'] },
    { title: 'Feelings', theme: 'feelings', words: ['happy', 'sad', 'angry', 'scared', 'tired', 'hungry'] },
    { title: 'My Home', theme: 'home', words: ['bed', 'table', 'chair', 'door', 'window', 'lamp'] },
    { title: 'Transport', theme: 'transport', words: ['bus', 'car', 'train', 'bike', 'boat', 'plane'] },
    { title: 'Days of the Week', theme: 'days', words: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] },
    { title: 'In the Park', theme: 'park', words: ['tree', 'flower', 'swing', 'slide', 'bench', 'pond'] },
    { title: 'At the Zoo', theme: 'zoo', words: ['lion', 'elephant', 'monkey', 'panda', 'giraffe', 'snake'] },
    { title: 'Bedtime', theme: 'bedtime', words: ['sleep', 'dream', 'pillow', 'blanket', 'story', 'night'] },
  ]),
]

function generateSimpleUnits(prefix: string, startIdx: number, topics: { title: string; theme: string; words: string[] }[]): Unit[] {
  return topics.map((topic, i) => {
    const idx = startIdx + i
    const mascots = ['Tot', 'Tat']
    const mascot = mascots[i % 2]
    const tips = [
      `${mascot} says: Great job learning new words!`,
      `${mascot} says: Practice makes perfect!`,
      `${mascot} says: You can do it!`,
      `${mascot} says: Keep going, you're doing great!`,
      `${mascot} says: Learning is fun!`,
    ]
    return {
      id: `u${idx}`,
      title: topic.title,
      theme: topic.theme,
      mascotTip: tips[i % tips.length],
      lessons: [{
        id: `u${idx}-l1`,
        title: topic.title,
        objectives: [`Learn ${topic.theme} vocabulary`, `Use ${topic.theme} words in sentences`],
        vocabulary: topic.words.map((w, vi) => ({
          id: `${prefix}-v${(idx-1)*6+vi+1}`,
          word: w,
          phonetic: '',
          meaning: `(${topic.theme} word)`,
          meaningZh: '',
          example: `I know the word "${w}".`,
        })),
        listening: [
          { id: `${prefix}-l${idx}a`, type: 'dictation', instruction: 'Listen and type:', ttsText: `I can say ${topic.words[0]}.`, correctAnswer: `I can say ${topic.words[0]}`, hint: 'Listen carefully' },
          { id: `${prefix}-l${idx}b`, type: 'mcq', instruction: 'Listen and choose:', ttsText: `The word is ${topic.words[1]}.`, question: 'What word did you hear?', options: [topic.words[0], topic.words[1], topic.words[2]], correctAnswer: topic.words[1], hint: 'Listen again' },
        ],
        speaking: [
          { id: `${prefix}-s${idx}a`, type: 'pronounce-word', instruction: 'Say this word:', targetText: topic.words[0], phonetic: '' },
          { id: `${prefix}-s${idx}b`, type: 'pronounce-word', instruction: 'Say this word:', targetText: topic.words[2], phonetic: '' },
        ],
        reading: [
          { id: `${prefix}-r${idx}`, type: 'mcq', passage: `I know many ${topic.theme} words: ${topic.words.slice(0, 4).join(', ')}.`, question: `How many ${topic.theme} words are listed?`, options: ['two', 'three', 'four'], correctAnswer: 'four', explanation: `Four words are listed` },
        ],
        writing: [
          { id: `${prefix}-w${idx}a`, type: 'spelling', instruction: 'Spell:', ttsText: topic.words[0], correctAnswer: topic.words[0], hint: `A ${topic.theme} word` },
          { id: `${prefix}-w${idx}b`, type: 'spelling', instruction: 'Spell:', ttsText: topic.words[1], correctAnswer: topic.words[1], hint: `A ${topic.theme} word` },
        ],
      }],
    }
  })
}

// Write P1
writePack({ id: 'p1-english-starter', name: 'English Starter 1A', publisher: 'Tot & Tat', grade: 'P1', version: '2.0.0', units: p1Units })

// ============================================================
// MATHS PACK - with proper calculations
// ============================================================
const mathUnits: Unit[] = [
  // Existing 5 units rewritten with calculations...
  createMathUnit(1, 'Addition', 'addition', 'Tot says: Let\'s add numbers together!', ['sum', 'plus', 'add', 'total', 'equals', 'altogether'], [
    { q: '5 + 3 = ?', opts: ['7', '8', '9'], ans: '8', text: 'Five plus three equals eight. 5 + 3 = 8.' },
    { q: '12 + 7 = ?', opts: ['18', '19', '20'], ans: '19', text: 'Twelve plus seven equals nineteen.' },
    { q: '25 + 16 = ?', opts: ['39', '41', '42'], ans: '41', text: 'Twenty-five plus sixteen equals forty-one.' },
  ]),
  createMathUnit(2, 'Subtraction', 'subtraction', 'Tat says: Take away and find the difference!', ['minus', 'subtract', 'difference', 'take away', 'less', 'remain'], [
    { q: '9 - 4 = ?', opts: ['4', '5', '6'], ans: '5', text: 'Nine minus four equals five. 9 - 4 = 5.' },
    { q: '20 - 8 = ?', opts: ['11', '12', '13'], ans: '12', text: 'Twenty minus eight equals twelve.' },
    { q: '45 - 17 = ?', opts: ['27', '28', '29'], ans: '28', text: 'Forty-five minus seventeen equals twenty-eight.' },
  ]),
  createMathUnit(3, 'Multiplication', 'multiplication', 'Tot says: Times tables are super useful!', ['multiply', 'times', 'product', 'groups of', 'each', 'rows'], [
    { q: '3 × 4 = ?', opts: ['10', '12', '14'], ans: '12', text: 'Three times four equals twelve. 3 × 4 = 12. That means 3 groups of 4.' },
    { q: '5 × 6 = ?', opts: ['28', '30', '32'], ans: '30', text: 'Five times six equals thirty. 5 × 6 = 30.' },
    { q: '7 × 8 = ?', opts: ['54', '56', '58'], ans: '56', text: 'Seven times eight equals fifty-six. 7 × 8 = 56.' },
  ]),
  createMathUnit(4, 'Division', 'division', 'Tat says: Sharing equally - that\'s division!', ['divide', 'share', 'quotient', 'equally', 'remainder', 'split'], [
    { q: '12 ÷ 3 = ?', opts: ['3', '4', '5'], ans: '4', text: 'Twelve divided by three equals four. 12 ÷ 3 = 4. Twelve shared equally among three is four each.' },
    { q: '20 ÷ 5 = ?', opts: ['3', '4', '5'], ans: '4', text: 'Twenty divided by five equals four.' },
    { q: '35 ÷ 7 = ?', opts: ['4', '5', '6'], ans: '5', text: 'Thirty-five divided by seven equals five.' },
  ]),
  createMathUnit(5, 'Fractions', 'fractions', 'Tot says: Half a pizza, a quarter of cake!', ['fraction', 'half', 'quarter', 'third', 'numerator', 'denominator'], [
    { q: 'What is 1/2 of 10?', opts: ['4', '5', '6'], ans: '5', text: 'One half of ten is five. 10 ÷ 2 = 5.' },
    { q: 'What is 1/4 of 20?', opts: ['4', '5', '6'], ans: '5', text: 'One quarter of twenty is five. 20 ÷ 4 = 5.' },
    { q: 'What is 1/3 of 12?', opts: ['3', '4', '5'], ans: '4', text: 'One third of twelve is four. 12 ÷ 3 = 4.' },
  ]),
  createMathUnit(6, 'Shapes and Geometry', 'shapes', 'Tat says: Shapes are everywhere!', ['triangle', 'rectangle', 'circle', 'cube', 'sphere', 'symmetry'], [
    { q: 'How many sides does a pentagon have?', opts: ['4', '5', '6'], ans: '5', text: 'A pentagon has five sides. Penta means five.' },
    { q: 'How many faces does a cube have?', opts: ['4', '6', '8'], ans: '6', text: 'A cube has six faces, eight vertices, and twelve edges.' },
    { q: 'How many degrees in a right angle?', opts: ['45°', '90°', '180°'], ans: '90°', text: 'A right angle is exactly ninety degrees.' },
  ]),
  createMathUnit(7, 'Time', 'time', 'Tot says: What time is it? Quarter past? Half past?', ["o'clock", 'half past', 'quarter past', 'quarter to', 'a.m.', 'p.m.'], [
    { q: 'School starts at 8:15. How do we say this?', opts: ['half past eight', 'quarter past eight', 'quarter to eight'], ans: 'quarter past eight', text: 'Eight fifteen is quarter past eight.' },
    { q: '3:30 in words?', opts: ['three o\'clock', 'half past three', 'quarter to four'], ans: 'half past three', text: 'Three thirty is half past three.' },
    { q: 'How many minutes in one hour?', opts: ['30', '60', '100'], ans: '60', text: 'There are sixty minutes in one hour.' },
  ]),
  createMathUnit(8, 'Money (HKD)', 'money', 'Tat says: Let\'s go shopping with Hong Kong dollars!', ['price', 'change', 'total', 'expensive', 'cheap', 'discount'], [
    { q: 'A book costs $25 and a pen costs $8. Total?', opts: ['$32', '$33', '$34'], ans: '$33', text: 'Twenty-five plus eight equals thirty-three. The total is $33.' },
    { q: 'I pay $50 for a $38 item. Change?', opts: ['$10', '$12', '$14'], ans: '$12', text: 'Fifty minus thirty-eight equals twelve. The change is $12.' },
    { q: '20% discount on $100?', opts: ['$20', '$80', '$90'], ans: '$80', text: 'Twenty percent of one hundred is twenty. So you pay eighty dollars.' },
  ]),
  createMathUnit(9, 'Measurement', 'measurement', 'Tot says: How long? How heavy? Let\'s measure!', ['centimetre', 'metre', 'kilogram', 'gram', 'litre', 'millilitre'], [
    { q: 'How many cm in 1 metre?', opts: ['10', '100', '1000'], ans: '100', text: 'One metre equals one hundred centimetres. 1 m = 100 cm.' },
    { q: 'How many grams in 1 kg?', opts: ['100', '500', '1000'], ans: '1000', text: 'One kilogram equals one thousand grams. 1 kg = 1000 g.' },
    { q: 'How many ml in 1 litre?', opts: ['100', '500', '1000'], ans: '1000', text: 'One litre equals one thousand millilitres. 1 L = 1000 mL.' },
  ]),
  createMathUnit(10, 'Perimeter and Area', 'perimeter', 'Tat says: Measure around and measure inside!', ['perimeter', 'area', 'length', 'width', 'square', 'formula'], [
    { q: 'Rectangle: length 5cm, width 3cm. Perimeter?', opts: ['15 cm', '16 cm', '18 cm'], ans: '16 cm', text: 'Perimeter = 2 × (length + width) = 2 × (5 + 3) = 2 × 8 = 16 cm.' },
    { q: 'Square: side 4cm. Area?', opts: ['8 cm²', '12 cm²', '16 cm²'], ans: '16 cm²', text: 'Area of square = side × side = 4 × 4 = 16 cm².' },
    { q: 'Rectangle: 6cm × 3cm. Area?', opts: ['9 cm²', '18 cm²', '24 cm²'], ans: '18 cm²', text: 'Area = length × width = 6 × 3 = 18 cm².' },
  ]),
  // Units 11-20
  createMathUnit(11, 'Number Patterns', 'patterns', 'Tot says: Find the pattern!', ['pattern', 'sequence', 'rule', 'next', 'term', 'increase'], [
    { q: '2, 4, 6, 8, ? What comes next?', opts: ['9', '10', '12'], ans: '10', text: 'The pattern adds 2 each time. 8 + 2 = 10.' },
    { q: '1, 4, 9, 16, ? What next?', opts: ['20', '25', '30'], ans: '25', text: 'These are square numbers: 1², 2², 3², 4², 5² = 25.' },
    { q: '3, 6, 12, 24, ? What next?', opts: ['36', '48', '30'], ans: '48', text: 'The pattern doubles: 24 × 2 = 48.' },
  ]),
  createMathUnit(12, 'Place Value', 'place-value', 'Tat says: Ones, tens, hundreds, thousands!', ['ones', 'tens', 'hundreds', 'thousands', 'digit', 'place value'], [
    { q: 'In 3,456 what is the value of 4?', opts: ['4', '40', '400'], ans: '400', text: 'The 4 is in the hundreds place. Its value is four hundred.' },
    { q: 'What is 2,000 + 300 + 50 + 7?', opts: ['2,357', '2,375', '2,537'], ans: '2,357', text: 'Two thousand three hundred and fifty-seven: 2,357.' },
    { q: 'Round 467 to the nearest hundred.', opts: ['400', '470', '500'], ans: '500', text: '467 rounds to 500 because 67 is closer to 100 than to 0.' },
  ]),
  createMathUnit(13, 'Mixed Operations', 'mixed-ops', 'Tot says: Add, subtract, multiply AND divide!', ['operation', 'brackets', 'order', 'BODMAS', 'calculate', 'solve'], [
    { q: '3 + 4 × 2 = ?', opts: ['11', '14', '10'], ans: '11', text: 'Multiply first: 4 × 2 = 8. Then add: 3 + 8 = 11.' },
    { q: '(5 + 3) × 2 = ?', opts: ['11', '16', '13'], ans: '16', text: 'Brackets first: 5 + 3 = 8. Then multiply: 8 × 2 = 16.' },
    { q: '20 - 4 × 3 = ?', opts: ['8', '48', '12'], ans: '8', text: 'Multiply first: 4 × 3 = 12. Then subtract: 20 - 12 = 8.' },
  ]),
  createMathUnit(14, 'Decimals', 'decimals', 'Tat says: What comes after the decimal point?', ['decimal', 'point', 'tenth', 'hundredth', 'convert', 'round'], [
    { q: '0.5 + 0.3 = ?', opts: ['0.2', '0.8', '0.53'], ans: '0.8', text: 'Five tenths plus three tenths equals eight tenths: 0.8.' },
    { q: 'Convert 3/4 to decimal.', opts: ['0.25', '0.5', '0.75'], ans: '0.75', text: 'Three quarters = 3 ÷ 4 = 0.75.' },
    { q: '2.6 + 1.4 = ?', opts: ['3.0', '4.0', '3.10'], ans: '4.0', text: '2.6 + 1.4 = 4.0. Six tenths plus four tenths is ten tenths = 1.' },
  ]),
  createMathUnit(15, 'Word Problems', 'word-problems', 'Tot says: Maths is everywhere in real life!', ['problem', 'solve', 'strategy', 'check', 'answer', 'method'], [
    { q: 'Amy has 24 stickers. She gives 8 to Ben. How many left?', opts: ['14', '16', '18'], ans: '16', text: 'Amy has 24, gives away 8. 24 - 8 = 16 stickers left.' },
    { q: '3 boxes, 12 oranges each. Total?', opts: ['30', '36', '42'], ans: '36', text: 'Three groups of twelve: 3 × 12 = 36 oranges.' },
    { q: '48 sweets shared among 6 children equally?', opts: ['6', '7', '8'], ans: '8', text: '48 ÷ 6 = 8. Each child gets 8 sweets.' },
  ]),
  createMathUnit(16, 'Angles', 'angles', 'Tat says: Acute, right, or obtuse? Let\'s measure angles!', ['angle', 'degree', 'acute', 'obtuse', 'right angle', 'protractor'], [
    { q: 'An acute angle is...', opts: ['less than 90°', 'exactly 90°', 'more than 90°'], ans: 'less than 90°', text: 'An acute angle is less than 90 degrees.' },
    { q: 'An obtuse angle is...', opts: ['less than 90°', 'between 90° and 180°', 'exactly 180°'], ans: 'between 90° and 180°', text: 'An obtuse angle is between 90 and 180 degrees.' },
    { q: 'Angles in a triangle sum to?', opts: ['90°', '180°', '360°'], ans: '180°', text: 'The angles in a triangle always add up to 180 degrees.' },
  ]),
  createMathUnit(17, 'Data and Charts', 'data', 'Tot says: Let\'s read bar charts and pictograms!', ['data', 'tally', 'bar chart', 'pictogram', 'frequency', 'survey'], [
    { q: 'A bar chart shows: Red=5, Blue=8, Green=3. Most popular?', opts: ['Red', 'Blue', 'Green'], ans: 'Blue', text: 'Blue has the tallest bar with 8, so blue is most popular.' },
    { q: 'Total of Red(5) + Blue(8) + Green(3)?', opts: ['14', '16', '18'], ans: '16', text: '5 + 8 + 3 = 16 total votes.' },
    { q: 'Difference between most and least popular?', opts: ['3', '5', '8'], ans: '5', text: 'Most popular (Blue, 8) minus least popular (Green, 3) = 5.' },
  ]),
  createMathUnit(18, 'Ratio and Proportion', 'ratio', 'Tat says: Comparing amounts - that\'s ratio!', ['ratio', 'proportion', 'compare', 'for every', 'simplify', 'equivalent'], [
    { q: 'Simplify the ratio 6:3', opts: ['2:1', '3:1', '1:2'], ans: '2:1', text: 'Divide both by 3: 6÷3 : 3÷3 = 2:1.' },
    { q: 'Ratio of boys to girls is 3:2. 15 boys. How many girls?', opts: ['8', '10', '12'], ans: '10', text: '3 parts = 15, so 1 part = 5. Girls = 2 × 5 = 10.' },
    { q: 'Mix juice:water = 1:4. For 200ml water, how much juice?', opts: ['40 ml', '50 ml', '60 ml'], ans: '50 ml', text: '1:4 means for every 4 parts water, 1 part juice. 200 ÷ 4 = 50 ml juice.' },
  ]),
  createMathUnit(19, 'Speed and Distance', 'speed', 'Tot says: Speed = Distance ÷ Time!', ['speed', 'distance', 'time', 'kilometres', 'per hour', 'calculate'], [
    { q: 'Walk 6 km in 2 hours. Speed?', opts: ['2 km/h', '3 km/h', '4 km/h'], ans: '3 km/h', text: 'Speed = Distance ÷ Time = 6 ÷ 2 = 3 km/h.' },
    { q: 'Car at 60 km/h for 3 hours. Distance?', opts: ['120 km', '180 km', '200 km'], ans: '180 km', text: 'Distance = Speed × Time = 60 × 3 = 180 km.' },
    { q: 'Travel 100 km at 50 km/h. Time?', opts: ['1 hour', '2 hours', '3 hours'], ans: '2 hours', text: 'Time = Distance ÷ Speed = 100 ÷ 50 = 2 hours.' },
  ]),
  createMathUnit(20, 'Probability', 'probability', 'Tat says: What are the chances? Let\'s find out!', ['probability', 'likely', 'unlikely', 'certain', 'impossible', 'chance'], [
    { q: 'Flip a coin. Probability of heads?', opts: ['1/4', '1/3', '1/2'], ans: '1/2', text: 'A coin has 2 sides. Probability of heads = 1/2 or 50%.' },
    { q: 'Roll a dice. Probability of getting 6?', opts: ['1/2', '1/4', '1/6'], ans: '1/6', text: 'A dice has 6 faces. Probability of any one number = 1/6.' },
    { q: 'Bag has 3 red and 2 blue balls. Probability of red?', opts: ['2/5', '3/5', '1/2'], ans: '3/5', text: 'Total balls = 5. Red = 3. Probability = 3/5.' },
  ]),
]

function createMathUnit(idx: number, title: string, theme: string, tip: string, words: string[], problems: { q: string; opts: string[]; ans: string; text: string }[]): Unit {
  return {
    id: `m-u${idx}`, title, theme, mascotTip: tip,
    lessons: [{
      id: `m-u${idx}-l1`, title, objectives: [`Solve ${theme} problems`, `Use ${theme} vocabulary`],
      vocabulary: words.map((w, i) => ({ id: `mv${(idx-1)*6+i+1}`, word: w, phonetic: '', meaning: `(${theme} term)`, meaningZh: '', example: `We use "${w}" in ${theme}.` })),
      listening: problems.map((p, i) => ({
        id: `ml${(idx-1)*3+i+1}`, type: 'mcq', instruction: 'Listen and solve.',
        ttsText: p.text, question: p.q, options: p.opts, correctAnswer: p.ans, hint: 'Think about the calculation'
      })),
      speaking: [
        { id: `ms${idx}a`, type: 'pronounce-word', instruction: 'Say:', targetText: words[0], phonetic: '' },
        { id: `ms${idx}b`, type: 'pronounce-sentence', instruction: 'Read the problem aloud:', targetText: problems[0].text.split('.')[0] + '.', hint: 'Clear maths language' },
      ],
      reading: [
        { id: `mr${idx}`, type: 'mcq', passage: problems.map(p => p.text).join(' '), question: problems[1].q, options: problems[1].opts, correctAnswer: problems[1].ans, explanation: problems[1].text },
      ],
      writing: [
        { id: `mw${idx}a`, type: 'spelling', instruction: 'Spell this maths word:', ttsText: words[0], correctAnswer: words[0], hint: `A ${theme} term` },
        { id: `mw${idx}b`, type: 'fill-blank', instruction: `Fill in: ${problems[0].q.replace('?', '_____')}`, correctAnswer: problems[0].ans, hint: 'Calculate!' },
      ],
    }]
  }
}

writePack({ id: 'p3-maths-english', name: 'Maths in English 3', publisher: 'Tot & Tat', grade: 'P3', version: '2.0.0', units: mathUnits })

// For brevity, generate remaining packs using the same patterns
// P3 English (expand existing to 20 units)
const p3Topics = [
  'My Family', 'My Home', 'Food and Drinks', 'My School', 'Animals', 'Weather and Seasons',
  'Shopping', 'Sports and Hobbies', 'Holidays', 'Jobs and Work', 'The City', 'Health and Body',
  'Nature', 'Technology', 'Music and Art', 'Feelings and Emotions', 'Books and Stories',
  'Friends and Friendship', 'Travel', 'Festivals and Celebrations',
]

const p3Units: Unit[] = p3Topics.map((title, i) => {
  const idx = i + 1
  const theme = title.toLowerCase().replace(/ and /g, '-').replace(/ /g, '-')
  return {
    id: `u${idx}`, title, theme,
    mascotTip: `${idx % 2 === 0 ? 'Tat' : 'Tot'} says: Let's learn about ${title.toLowerCase()}!`,
    lessons: [{
      id: `u${idx}-l1`, title, objectives: [`Learn ${title} vocabulary`, `Use words in context`],
      vocabulary: getP3Vocab(idx, title),
      listening: getP3Listening(idx, title),
      speaking: [
        { id: `s${idx}a`, type: 'pronounce-word', instruction: 'Say:', targetText: getP3Vocab(idx, title)[0].word, phonetic: getP3Vocab(idx, title)[0].phonetic },
        { id: `s${idx}b`, type: 'pronounce-sentence', instruction: 'Read aloud:', targetText: getP3Vocab(idx, title)[0].example, hint: 'Clearly' },
      ],
      reading: getP3Reading(idx, title),
      writing: getP3Writing(idx, title),
    }]
  }
})

writePack({ id: 'p3-english-fun', name: 'English Fun 3A', publisher: 'Tot & Tat', grade: 'P3', version: '2.0.0', units: p3Units })

// P5 English
const p5Topics = [
  'Healthy Living', 'Travel and Transport', 'The Environment', 'Technology and Inventions',
  'Space and Universe', 'World Cultures', 'Famous People', 'Sports and Competition',
  'Media and Communication', 'Natural Disasters', 'Music and Performance', 'Food Around the World',
  'Ocean and Marine Life', 'Ancient Civilisations', 'Money and Business', 'Art and Design',
  'Friendship and Relationships', 'The Future', 'Adventure and Exploration', 'Life in Hong Kong',
]
const p5Units = p5Topics.map((title, i) => createGenericUnit('p5', i + 1, title, 'P5'))
writePack({ id: 'p5-english-explorer', name: 'English Explorer 5A', publisher: 'Tot & Tat', grade: 'P5', version: '2.0.0', units: p5Units })

// Science
const sciTopics = [
  'Plants and Growth', 'Materials and Properties', 'Forces and Movement', 'The Human Body',
  'Light and Shadow', 'Sound and Hearing', 'Electricity', 'Magnets',
  'Water Cycle', 'Food Chains', 'Habitats', 'Earth and Space',
  'Rocks and Soil', 'Air and Weather', 'Simple Machines', 'Energy',
  'Senses', 'Life Cycles', 'Teeth and Digestion', 'Staying Healthy',
]
const sciUnits = sciTopics.map((title, i) => createGenericUnit('sci', i + 1, title, 'Science'))
writePack({ id: 'p3-science-english', name: 'Science in English 3', publisher: 'Tot & Tat', grade: 'P3', version: '2.0.0', units: sciUnits })

// General Studies
const gsTopics = [
  'Our Community', 'Hong Kong Geography', 'Healthy Habits and Safety', 'Chinese Festivals',
  'Transport in Hong Kong', 'Caring for Others', 'Rules and Laws', 'Our Government',
  'Global Connections', 'Protecting the Environment', 'Water and Resources', 'History of Hong Kong',
  'Communication Then and Now', 'Living Together', 'Disaster Preparedness', 'Rights and Responsibilities',
  'Cultural Diversity', 'Maps and Directions', 'Famous Places in HK', 'Being a Good Citizen',
]
const gsUnits = gsTopics.map((title, i) => createGenericUnit('gs', i + 1, title, 'General Studies'))
writePack({ id: 'p3-gs-english', name: 'General Studies in English 3', publisher: 'Tot & Tat', grade: 'P3', version: '2.0.0', units: gsUnits })

// NEW: Daily Scenarios
const dailyTopics = [
  'At the Restaurant', 'At the Supermarket', 'At the Doctor', 'On the Bus',
  'At the Library', 'At the Playground', 'At a Birthday Party', 'At the Beach',
  'At the Airport', 'At the Post Office', 'In a Taxi', 'At the Cinema',
  'At the Bakery', 'At the Pet Shop', 'At the Sports Centre', 'At the Museum',
  'At a Restaurant (Ordering)', 'At the Hair Salon', 'At the Bookshop', 'Lost and Found',
]
const dailyUnits = dailyTopics.map((title, i) => createDailyUnit(i + 1, title))
writePack({ id: 'p3-daily-scenarios', name: 'Daily Life English', publisher: 'Tot & Tat', grade: 'P3', version: '1.0.0', units: dailyUnits })

console.log('\n✅ All packs generated!')

// ============================================================
// Helper functions for generating content
// ============================================================

function createGenericUnit(prefix: string, idx: number, title: string, subject: string): Unit {
  const theme = title.toLowerCase().replace(/ and /g, '-').replace(/ /g, '-')
  const mascot = idx % 2 === 0 ? 'Tat' : 'Tot'
  return {
    id: `${prefix}-u${idx}`, title, theme,
    mascotTip: `${mascot} says: Let's explore ${title.toLowerCase()}!`,
    lessons: [{
      id: `${prefix}-u${idx}-l1`, title, objectives: [`Learn ${title} vocabulary`, `Discuss ${title} topics`],
      vocabulary: Array.from({ length: 6 }, (_, i) => ({
        id: `${prefix}-v${(idx-1)*6+i+1}`, word: `(${title} word ${i+1})`, phonetic: '', meaning: `${subject} vocabulary`, meaningZh: '', example: `Related to ${title}.`
      })),
      listening: [
        { id: `${prefix}-l${idx}a`, type: 'mcq', instruction: `Listen about ${title}.`, ttsText: `This topic is about ${title}.`, question: `What is the topic?`, options: [title, 'Something else', 'Not sure'], correctAnswer: title, hint: 'Listen to the topic' },
      ],
      speaking: [
        { id: `${prefix}-s${idx}`, type: 'pronounce-sentence', instruction: 'Read aloud:', targetText: `I am learning about ${title.toLowerCase()}.`, hint: 'Clear pronunciation' },
      ],
      reading: [
        { id: `${prefix}-r${idx}`, type: 'mcq', passage: `${title} is an important topic in ${subject}. We can learn many new English words about it.`, question: `What subject is this?`, options: [subject, 'Art', 'Music'], correctAnswer: subject, explanation: `This is a ${subject} topic` },
      ],
      writing: [
        { id: `${prefix}-w${idx}`, type: 'spelling', instruction: 'Spell the topic name:', ttsText: title.split(' ')[0].toLowerCase(), correctAnswer: title.split(' ')[0].toLowerCase(), hint: 'First word of the topic' },
      ],
    }]
  }
}

function createDailyUnit(idx: number, title: string): Unit {
  const scenarios = getDailyScenario(idx, title)
  return {
    id: `daily-u${idx}`, title, theme: title.toLowerCase().replace(/at the |at a |on the |in a /g, '').replace(/ /g, '-'),
    mascotTip: `${idx % 2 === 0 ? 'Tat' : 'Tot'} says: ${scenarios.tip}`,
    lessons: [{
      id: `daily-u${idx}-l1`, title, objectives: scenarios.objectives,
      vocabulary: scenarios.vocab,
      listening: scenarios.listening,
      speaking: scenarios.speaking,
      reading: scenarios.reading,
      writing: scenarios.writing,
    }]
  }
}

function getDailyScenario(idx: number, title: string) {
  const scenarioData: Record<string, any> = {
    'At the Restaurant': {
      tip: 'Let\'s order some food!',
      objectives: ['Order food politely', 'Ask about the menu', 'Pay the bill'],
      vocab: [
        { id: 'dv1', word: 'menu', phonetic: '/ˈmenjuː/', meaning: 'list of food choices', meaningZh: '菜單', example: 'May I see the menu, please?' },
        { id: 'dv2', word: 'order', phonetic: '/ˈɔːrdər/', meaning: 'to ask for food', meaningZh: '點餐', example: 'I would like to order now.' },
        { id: 'dv3', word: 'waiter', phonetic: '/ˈweɪtər/', meaning: 'person who serves food', meaningZh: '服務員', example: 'The waiter brought our food.' },
        { id: 'dv4', word: 'bill', phonetic: '/bɪl/', meaning: 'the paper showing how much to pay', meaningZh: '帳單', example: 'Can I have the bill, please?' },
        { id: 'dv5', word: 'reservation', phonetic: '/ˌrezərˈveɪʃn/', meaning: 'booking a table', meaningZh: '預訂', example: 'I have a reservation for two.' },
        { id: 'dv6', word: 'appetiser', phonetic: '/ˈæpɪtaɪzər/', meaning: 'small dish before main meal', meaningZh: '前菜', example: 'Would you like an appetiser?' },
      ],
      listening: [
        { id: 'dl1', type: 'mcq', instruction: 'Listen to the conversation.', ttsText: 'Waiter: Good evening! Table for how many? Customer: Table for four, please. Waiter: This way, please.', question: 'How many people?', options: ['two', 'three', 'four'], correctAnswer: 'four', hint: 'Listen for the number' },
        { id: 'dl2', type: 'mcq', instruction: 'Listen and answer.', ttsText: 'I would like the chicken pasta and a glass of orange juice, please.', question: 'What drink did they order?', options: ['water', 'milk', 'orange juice'], correctAnswer: 'orange juice', hint: 'Listen for the drink' },
        { id: 'dl3', type: 'dictation', instruction: 'Type what you hear:', ttsText: 'Can I have the bill, please?', correctAnswer: 'Can I have the bill, please', hint: 'A polite request at the end of a meal' },
      ],
      speaking: [
        { id: 'ds1', type: 'pronounce-sentence', instruction: 'Say this politely:', targetText: 'May I see the menu, please?', hint: 'Polite and clear' },
        { id: 'ds2', type: 'pronounce-sentence', instruction: 'Order food:', targetText: 'I would like the fish and chips, please.', hint: 'Friendly tone' },
      ],
      reading: [
        { id: 'dr1', type: 'mcq', passage: 'Welcome to Happy Diner! Today\'s specials: Fish and Chips - $68, Pasta with Tomato Sauce - $55, Chicken Rice - $48. All meals include a free drink. Children under 5 eat free!', question: 'Which is the cheapest meal?', options: ['Fish and Chips', 'Pasta', 'Chicken Rice'], correctAnswer: 'Chicken Rice', explanation: 'Chicken Rice costs $48, the lowest price' },
      ],
      writing: [
        { id: 'dw1', type: 'sentence-order', instruction: 'Make a polite request:', words: ['I', 'the', 'have', 'can', 'please', 'menu'], correctAnswer: 'can I have the menu please', hint: 'Start with can' },
        { id: 'dw2', type: 'fill-blank', instruction: 'Fill in: I would like to _____ the pasta.', correctAnswer: 'order', hint: 'To ask for food' },
      ],
    },
    'At the Supermarket': {
      tip: 'Let\'s buy groceries!',
      objectives: ['Ask for help finding items', 'Read prices', 'Pay at the cashier'],
      vocab: [
        { id: 'dv7', word: 'aisle', phonetic: '/aɪl/', meaning: 'a walkway between shelves', meaningZh: '走道', example: 'The bread is in aisle three.' },
        { id: 'dv8', word: 'trolley', phonetic: '/ˈtrɒli/', meaning: 'a shopping cart', meaningZh: '手推車', example: 'Put the food in the trolley.' },
        { id: 'dv9', word: 'cashier', phonetic: '/kæˈʃɪər/', meaning: 'person at the checkout', meaningZh: '收銀員', example: 'Pay the cashier at the counter.' },
        { id: 'dv10', word: 'receipt', phonetic: '/rɪˈsiːt/', meaning: 'paper showing what you bought', meaningZh: '收據', example: 'Keep the receipt.' },
        { id: 'dv11', word: 'queue', phonetic: '/kjuː/', meaning: 'a line of people waiting', meaningZh: '排隊', example: 'Please join the queue.' },
        { id: 'dv12', word: 'bargain', phonetic: '/ˈbɑːrɡɪn/', meaning: 'something at a good price', meaningZh: '特價/便宜貨', example: 'This is a real bargain!' },
      ],
      listening: [
        { id: 'dl4', type: 'mcq', instruction: 'Listen.', ttsText: 'Excuse me, where can I find the milk? It\'s in aisle two, in the refrigerator section.', question: 'Where is the milk?', options: ['Aisle 1', 'Aisle 2', 'Aisle 3'], correctAnswer: 'Aisle 2', hint: 'Listen for the aisle number' },
        { id: 'dl5', type: 'dictation', instruction: 'Type:', ttsText: 'Where is the bread?', correctAnswer: 'Where is the bread', hint: 'Asking for directions' },
      ],
      speaking: [
        { id: 'ds3', type: 'pronounce-sentence', instruction: 'Ask for help:', targetText: 'Excuse me, where can I find the rice?', hint: 'Polite question' },
        { id: 'ds4', type: 'pronounce-sentence', instruction: 'At checkout:', targetText: 'I would like a bag, please.', hint: 'Polite request' },
      ],
      reading: [
        { id: 'dr2', type: 'mcq', passage: 'Mum\'s shopping list: Milk $18, Eggs $22, Bread $15, Apples $25, Rice $35. Total budget: $120.', question: 'What is the total cost?', options: ['$105', '$115', '$125'], correctAnswer: '$115', explanation: '18 + 22 + 15 + 25 + 35 = 115' },
      ],
      writing: [
        { id: 'dw3', type: 'spelling', instruction: 'Spell:', ttsText: 'receipt', correctAnswer: 'receipt', hint: 'Silent p! 7 letters' },
        { id: 'dw4', type: 'fill-blank', instruction: 'Put the food in the _____.', correctAnswer: 'trolley', hint: 'Shopping cart' },
      ],
    },
  }

  // Default fallback for scenarios not fully detailed
  const defaultScenario = {
    tip: `Let's practice English for ${title.toLowerCase()}!`,
    objectives: [`Use English in ${title.toLowerCase()} situations`, 'Ask and answer questions politely', 'Understand common phrases'],
    vocab: Array.from({ length: 6 }, (_, i) => ({
      id: `dv${(idx-1)*6+i+1}`, word: `(${title} word ${i+1})`, phonetic: '', meaning: `Common phrase for ${title}`, meaningZh: '', example: `Used when ${title.toLowerCase()}.`
    })),
    listening: [
      { id: `dl${idx}`, type: 'mcq', instruction: `Listen to the ${title.toLowerCase()} conversation.`, ttsText: `This conversation takes place ${title.toLowerCase()}.`, question: 'Where does this happen?', options: [title, 'At home', 'At school'], correctAnswer: title, hint: 'Listen to the setting' },
    ],
    speaking: [
      { id: `ds${idx}`, type: 'pronounce-sentence', instruction: 'Say this phrase:', targetText: `Excuse me, can you help me?`, hint: 'Polite and clear' },
    ],
    reading: [
      { id: `dr${idx}`, type: 'mcq', passage: `When you are ${title.toLowerCase()}, you need to speak English politely. Always say "please" and "thank you". If you need help, say "Excuse me".`, question: 'What should you always say?', options: ['Sorry', 'Please and thank you', 'Hello'], correctAnswer: 'Please and thank you', explanation: 'Being polite is important' },
    ],
    writing: [
      { id: `dw${idx}a`, type: 'sentence-order', instruction: 'Make a polite request:', words: ['me', 'excuse', 'help', 'can', 'you'], correctAnswer: 'excuse me can you help', hint: 'Start with excuse me' },
      { id: `dw${idx}b`, type: 'fill-blank', instruction: 'Thank you for your _____.', correctAnswer: 'help', hint: 'What the person gave you' },
    ],
  }

  return scenarioData[title] || defaultScenario
}

// P3 content helpers (abbreviated for the key first units)
function getP3Vocab(idx: number, title: string): VocabItem[] {
  const vocabSets: Record<number, VocabItem[]> = {
    1: [
      { id: 'v1', word: 'mother', phonetic: '/ˈmʌðər/', meaning: 'female parent', meaningZh: '母親', example: 'My mother is a teacher.' },
      { id: 'v2', word: 'father', phonetic: '/ˈfɑːðər/', meaning: 'male parent', meaningZh: '父親', example: 'My father likes to cook.' },
      { id: 'v3', word: 'brother', phonetic: '/ˈbrʌðər/', meaning: 'male sibling', meaningZh: '兄弟', example: 'I have one brother.' },
      { id: 'v4', word: 'sister', phonetic: '/ˈsɪstər/', meaning: 'female sibling', meaningZh: '姐妹', example: 'My sister is younger.' },
      { id: 'v5', word: 'grandmother', phonetic: '/ˈɡrænˌmʌðər/', meaning: 'parent\'s mother', meaningZh: '祖母', example: 'Grandmother tells stories.' },
      { id: 'v6', word: 'uncle', phonetic: '/ˈʌŋkl/', meaning: 'parent\'s brother', meaningZh: '叔叔', example: 'My uncle lives nearby.' },
    ],
  }
  return vocabSets[idx] || Array.from({ length: 6 }, (_, i) => ({
    id: `p3v${(idx-1)*6+i+1}`, word: `(${title} word ${i+1})`, phonetic: '', meaning: `Related to ${title}`, meaningZh: '', example: `A word about ${title.toLowerCase()}.`
  }))
}

function getP3Listening(idx: number, title: string): Exercise[] {
  return [
    { id: `p3l${idx}a`, type: 'mcq', instruction: `Listen about ${title}.`, ttsText: `This is about ${title.toLowerCase()}.`, question: `What is the topic?`, options: [title, 'Something else', 'Not mentioned'], correctAnswer: title, hint: 'Listen to the topic' },
    { id: `p3l${idx}b`, type: 'dictation', instruction: 'Listen and type:', ttsText: `I like learning about ${title.toLowerCase()}.`, correctAnswer: `I like learning about ${title.toLowerCase()}`, hint: 'About a topic' },
  ]
}

function getP3Reading(idx: number, title: string): Exercise[] {
  return [{ id: `p3r${idx}`, type: 'mcq', passage: `${title} is something we learn about in school. It helps us understand the world better.`, question: 'What helps us understand the world?', options: ['Playing games', `Learning about ${title}`, 'Watching TV'], correctAnswer: `Learning about ${title}`, explanation: 'Learning helps us understand' }]
}

function getP3Writing(idx: number, title: string): Exercise[] {
  return [
    { id: `p3w${idx}a`, type: 'spelling', instruction: 'Spell:', ttsText: title.split(' ')[0].toLowerCase(), correctAnswer: title.split(' ')[0].toLowerCase(), hint: `First word of ${title}` },
    { id: `p3w${idx}b`, type: 'fill-blank', instruction: `I am learning about _____.`, correctAnswer: title.toLowerCase(), hint: 'The topic name' },
  ]
}

console.log('Generating content packs...')
