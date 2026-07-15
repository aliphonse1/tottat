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
// (mathVocabData and createMathUnit defined below, called via getMathUnits)
// ============================================================
function getMathUnits(): Unit[] { return [
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
]}

const mathVocabData: Record<string, { word: string; phonetic: string; meaning: string; meaningZh: string; example: string }[]> = {
  addition: [
    { word: 'sum', phonetic: '/sʌm/', meaning: 'the result of adding numbers', meaningZh: '總和', example: 'The sum of 3 and 5 is 8.' },
    { word: 'plus', phonetic: '/plʌs/', meaning: 'to add, the + sign', meaningZh: '加', example: 'Two plus three equals five.' },
    { word: 'add', phonetic: '/æd/', meaning: 'to put numbers together', meaningZh: '加；相加', example: 'Add 4 and 6 together.' },
    { word: 'total', phonetic: '/ˈtoʊtl/', meaning: 'the whole amount', meaningZh: '總數', example: 'The total is twenty.' },
    { word: 'equals', phonetic: '/ˈiːkwəlz/', meaning: 'is the same as; the = sign', meaningZh: '等於', example: 'Five plus five equals ten.' },
    { word: 'altogether', phonetic: '/ˌɔːltəˈɡeðər/', meaning: 'all combined; in total', meaningZh: '總共', example: 'How many altogether?' },
  ],
  subtraction: [
    { word: 'subtract', phonetic: '/səbˈtrækt/', meaning: 'to take one number away from another', meaningZh: '減去', example: 'Subtract 3 from 10.' },
    { word: 'minus', phonetic: '/ˈmaɪnəs/', meaning: 'to take away; the − sign', meaningZh: '減', example: 'Ten minus four is six.' },
    { word: 'difference', phonetic: '/ˈdɪfrəns/', meaning: 'how much one number is more or less than another', meaningZh: '差', example: 'The difference between 8 and 3 is 5.' },
    { word: 'take away', phonetic: '/teɪk əˈweɪ/', meaning: 'to subtract; remove from', meaningZh: '拿走；減去', example: 'Take away five from twelve.' },
    { word: 'remain', phonetic: '/rɪˈmeɪn/', meaning: 'what is left over', meaningZh: '剩餘', example: 'Seven remain after you take away three.' },
    { word: 'fewer', phonetic: '/ˈfjuːər/', meaning: 'a smaller number of', meaningZh: '更少的', example: 'There are fewer apples than oranges.' },
  ],
  multiplication: [
    { word: 'multiply', phonetic: '/ˈmʌltɪplaɪ/', meaning: 'to add a number to itself a certain number of times', meaningZh: '乘', example: 'Multiply 3 by 4 to get 12.' },
    { word: 'times', phonetic: '/taɪmz/', meaning: 'multiplied by; the × sign', meaningZh: '乘以', example: 'Three times four equals twelve.' },
    { word: 'product', phonetic: '/ˈprɒdʌkt/', meaning: 'the result of multiplying', meaningZh: '積', example: 'The product of 5 and 6 is 30.' },
    { word: 'groups of', phonetic: '/ɡruːps ɒv/', meaning: 'sets of equal amounts', meaningZh: '組', example: 'Three groups of four is twelve.' },
    { word: 'each', phonetic: '/iːtʃ/', meaning: 'every one', meaningZh: '每一個', example: 'Each box has 5 sweets.' },
    { word: 'rows', phonetic: '/roʊz/', meaning: 'items arranged in lines', meaningZh: '行；排', example: 'There are 4 rows of 3 chairs.' },
  ],
  division: [
    { word: 'divide', phonetic: '/dɪˈvaɪd/', meaning: 'to split into equal parts', meaningZh: '除；分', example: 'Divide 12 by 3.' },
    { word: 'share', phonetic: '/ʃeər/', meaning: 'to give out equally', meaningZh: '分享；平分', example: 'Share 10 sweets among 5 children.' },
    { word: 'quotient', phonetic: '/ˈkwoʊʃənt/', meaning: 'the answer to a division', meaningZh: '商', example: 'The quotient of 20 ÷ 4 is 5.' },
    { word: 'equally', phonetic: '/ˈiːkwəli/', meaning: 'in the same amounts', meaningZh: '平均地', example: 'Split the cake equally.' },
    { word: 'remainder', phonetic: '/rɪˈmeɪndər/', meaning: 'the amount left over after dividing', meaningZh: '餘數', example: '7 ÷ 2 = 3 remainder 1.' },
    { word: 'split', phonetic: '/splɪt/', meaning: 'to divide into parts', meaningZh: '分開', example: 'Split the group into 2 teams.' },
  ],
  fractions: [
    { word: 'fraction', phonetic: '/ˈfrækʃən/', meaning: 'a part of a whole', meaningZh: '分數', example: 'One half is a fraction.' },
    { word: 'half', phonetic: '/hɑːf/', meaning: 'one of two equal parts; 1/2', meaningZh: '一半', example: 'Half of 10 is 5.' },
    { word: 'quarter', phonetic: '/ˈkwɔːrtər/', meaning: 'one of four equal parts; 1/4', meaningZh: '四分之一', example: 'A quarter of 20 is 5.' },
    { word: 'third', phonetic: '/θɜːrd/', meaning: 'one of three equal parts; 1/3', meaningZh: '三分之一', example: 'A third of 12 is 4.' },
    { word: 'numerator', phonetic: '/ˈnjuːməreɪtər/', meaning: 'the top number of a fraction', meaningZh: '分子', example: 'In 3/4, the numerator is 3.' },
    { word: 'denominator', phonetic: '/dɪˈnɒmɪneɪtər/', meaning: 'the bottom number of a fraction', meaningZh: '分母', example: 'In 3/4, the denominator is 4.' },
  ],
  shapes: [
    { word: 'triangle', phonetic: '/ˈtraɪæŋɡl/', meaning: 'a shape with 3 sides', meaningZh: '三角形', example: 'A triangle has three sides.' },
    { word: 'rectangle', phonetic: '/ˈrektæŋɡl/', meaning: 'a shape with 4 sides and 4 right angles', meaningZh: '長方形', example: 'A door is shaped like a rectangle.' },
    { word: 'circle', phonetic: '/ˈsɜːrkl/', meaning: 'a round shape with no corners', meaningZh: '圓形', example: 'A coin is a circle.' },
    { word: 'cube', phonetic: '/kjuːb/', meaning: 'a 3D shape with 6 square faces', meaningZh: '正方體', example: 'A dice is shaped like a cube.' },
    { word: 'sphere', phonetic: '/sfɪr/', meaning: 'a perfectly round 3D shape; a ball', meaningZh: '球體', example: 'A basketball is a sphere.' },
    { word: 'symmetry', phonetic: '/ˈsɪmətri/', meaning: 'when both sides are the same', meaningZh: '對稱', example: 'A butterfly has symmetry.' },
  ],
  time: [
    { word: "o'clock", phonetic: '/əˈklɒk/', meaning: 'exactly on the hour', meaningZh: '…點鐘', example: "It's three o'clock." },
    { word: 'half past', phonetic: '/hɑːf pɑːst/', meaning: '30 minutes after the hour', meaningZh: '…點半', example: 'It is half past two.' },
    { word: 'quarter past', phonetic: '/ˈkwɔːrtər pɑːst/', meaning: '15 minutes after the hour', meaningZh: '…點十五分', example: 'School starts at quarter past eight.' },
    { word: 'quarter to', phonetic: '/ˈkwɔːrtər tuː/', meaning: '15 minutes before the next hour', meaningZh: '差十五分到…點', example: 'It is quarter to nine.' },
    { word: 'a.m.', phonetic: '/ˌeɪˈem/', meaning: 'morning time (before noon)', meaningZh: '上午', example: 'School starts at 8 a.m.' },
    { word: 'p.m.', phonetic: '/ˌpiːˈem/', meaning: 'afternoon/evening time (after noon)', meaningZh: '下午', example: 'We finish at 3 p.m.' },
  ],
  money: [
    { word: 'price', phonetic: '/praɪs/', meaning: 'how much something costs', meaningZh: '價格', example: 'The price of this toy is $50.' },
    { word: 'change', phonetic: '/tʃeɪndʒ/', meaning: 'money given back after paying', meaningZh: '找零', example: 'My change is $5.' },
    { word: 'total', phonetic: '/ˈtoʊtl/', meaning: 'the full amount to pay', meaningZh: '總額', example: 'The total is $33.' },
    { word: 'expensive', phonetic: '/ɪkˈspensɪv/', meaning: 'costs a lot of money', meaningZh: '昂貴的', example: 'The watch is expensive.' },
    { word: 'cheap', phonetic: '/tʃiːp/', meaning: 'does not cost much', meaningZh: '便宜的', example: 'This pen is cheap.' },
    { word: 'discount', phonetic: '/ˈdɪskaʊnt/', meaning: 'a reduction in price', meaningZh: '折扣', example: 'There is a 20% discount today.' },
  ],
  measurement: [
    { word: 'centimetre', phonetic: '/ˈsentɪmiːtər/', meaning: 'a unit of length (cm); 100 cm = 1 m', meaningZh: '厘米', example: 'My pencil is 15 centimetres long.' },
    { word: 'metre', phonetic: '/ˈmiːtər/', meaning: 'a unit of length (m); 1000 m = 1 km', meaningZh: '米', example: 'The room is 5 metres wide.' },
    { word: 'kilogram', phonetic: '/ˈkɪləɡræm/', meaning: 'a unit of weight (kg); 1 kg = 1000 g', meaningZh: '公斤', example: 'The bag weighs 2 kilograms.' },
    { word: 'gram', phonetic: '/ɡræm/', meaning: 'a small unit of weight (g)', meaningZh: '克', example: 'An apple weighs about 200 grams.' },
    { word: 'litre', phonetic: '/ˈliːtər/', meaning: 'a unit of liquid volume (L)', meaningZh: '升；公升', example: 'I drank one litre of water.' },
    { word: 'millilitre', phonetic: '/ˈmɪlɪliːtər/', meaning: 'a small unit of liquid (mL); 1000 mL = 1 L', meaningZh: '毫升', example: 'The cup holds 250 millilitres.' },
  ],
  perimeter: [
    { word: 'perimeter', phonetic: '/pəˈrɪmɪtər/', meaning: 'the distance around a shape', meaningZh: '周長', example: 'The perimeter of a square with side 4 is 16.' },
    { word: 'area', phonetic: '/ˈeəriə/', meaning: 'the space inside a flat shape', meaningZh: '面積', example: 'The area of the room is 12 m².' },
    { word: 'length', phonetic: '/leŋθ/', meaning: 'how long something is', meaningZh: '長度', example: 'The length of the table is 2 metres.' },
    { word: 'width', phonetic: '/wɪdθ/', meaning: 'how wide something is', meaningZh: '寬度', example: 'The width of the road is 10 metres.' },
    { word: 'square', phonetic: '/skweər/', meaning: 'a shape with 4 equal sides and 4 right angles', meaningZh: '正方形', example: 'Each side of the square is 5 cm.' },
    { word: 'formula', phonetic: '/ˈfɔːrmjələ/', meaning: 'a rule written with symbols to calculate', meaningZh: '公式', example: 'The formula for area is length × width.' },
  ],
  patterns: [
    { word: 'pattern', phonetic: '/ˈpætərn/', meaning: 'a repeated arrangement that follows a rule', meaningZh: '規律；模式', example: 'The pattern is 2, 4, 6, 8.' },
    { word: 'sequence', phonetic: '/ˈsiːkwəns/', meaning: 'a set of numbers in order', meaningZh: '序列', example: 'This is a number sequence.' },
    { word: 'rule', phonetic: '/ruːl/', meaning: 'the method or pattern being followed', meaningZh: '規則', example: 'The rule is "add 3 each time".' },
    { word: 'next', phonetic: '/nekst/', meaning: 'the one that comes after', meaningZh: '下一個', example: 'What is the next number?' },
    { word: 'term', phonetic: '/tɜːrm/', meaning: 'each number in a sequence', meaningZh: '項', example: 'The third term is 9.' },
    { word: 'increase', phonetic: '/ɪnˈkriːs/', meaning: 'to get bigger', meaningZh: '增加', example: 'The numbers increase by 5.' },
  ],
  'place-value': [
    { word: 'ones', phonetic: '/wʌnz/', meaning: 'the rightmost digit (1s place)', meaningZh: '個位', example: 'In 45, the ones digit is 5.' },
    { word: 'tens', phonetic: '/tenz/', meaning: 'the second digit from right (10s place)', meaningZh: '十位', example: 'In 45, the tens digit is 4.' },
    { word: 'hundreds', phonetic: '/ˈhʌndrədz/', meaning: 'the third digit from right (100s place)', meaningZh: '百位', example: 'In 345, the hundreds digit is 3.' },
    { word: 'thousands', phonetic: '/ˈθaʊzəndz/', meaning: 'the fourth digit (1000s place)', meaningZh: '千位', example: 'In 2,345 the thousands digit is 2.' },
    { word: 'digit', phonetic: '/ˈdɪdʒɪt/', meaning: 'a single number symbol (0-9)', meaningZh: '數字', example: '45 has two digits.' },
    { word: 'place value', phonetic: '/pleɪs ˈvæljuː/', meaning: 'the value of a digit based on its position', meaningZh: '位值', example: 'The place value of 4 in 400 is four hundred.' },
  ],
  'mixed-ops': [
    { word: 'operation', phonetic: '/ˌɒpəˈreɪʃən/', meaning: 'a maths process: +, −, ×, ÷', meaningZh: '運算', example: 'Addition is an operation.' },
    { word: 'brackets', phonetic: '/ˈbrækɪts/', meaning: 'symbols () that group numbers to calculate first', meaningZh: '括號', example: '(3 + 2) × 4 = 20.' },
    { word: 'order', phonetic: '/ˈɔːrdər/', meaning: 'the sequence in which to calculate', meaningZh: '順序', example: 'The order of operations matters.' },
    { word: 'BODMAS', phonetic: '/ˈbɒdmæs/', meaning: 'rule: Brackets, Orders, Divide, Multiply, Add, Subtract', meaningZh: '運算順序規則', example: 'Use BODMAS to solve 3 + 4 × 2.' },
    { word: 'calculate', phonetic: '/ˈkælkjuleɪt/', meaning: 'to work out the answer', meaningZh: '計算', example: 'Calculate 5 × 3 + 2.' },
    { word: 'solve', phonetic: '/sɒlv/', meaning: 'to find the answer to a problem', meaningZh: '解答', example: 'Can you solve this equation?' },
  ],
  decimals: [
    { word: 'decimal', phonetic: '/ˈdesɪml/', meaning: 'a number with a point showing parts less than one', meaningZh: '小數', example: '0.5 is a decimal.' },
    { word: 'point', phonetic: '/pɔɪnt/', meaning: 'the dot separating whole numbers from parts', meaningZh: '小數點', example: 'The point separates ones from tenths.' },
    { word: 'tenth', phonetic: '/tenθ/', meaning: 'one of ten equal parts; 0.1', meaningZh: '十分之一', example: 'Three tenths is written as 0.3.' },
    { word: 'hundredth', phonetic: '/ˈhʌndrədθ/', meaning: 'one of a hundred equal parts; 0.01', meaningZh: '百分之一', example: 'Five hundredths is 0.05.' },
    { word: 'convert', phonetic: '/kənˈvɜːrt/', meaning: 'to change from one form to another', meaningZh: '轉換', example: 'Convert 1/4 to a decimal: 0.25.' },
    { word: 'round', phonetic: '/raʊnd/', meaning: 'to adjust a number to the nearest value', meaningZh: '四捨五入', example: 'Round 3.67 to 3.7.' },
  ],
  'word-problems': [
    { word: 'problem', phonetic: '/ˈprɒbləm/', meaning: 'a maths question to solve', meaningZh: '問題', example: 'Read the problem carefully.' },
    { word: 'solve', phonetic: '/sɒlv/', meaning: 'to find the answer', meaningZh: '解答', example: 'Solve step by step.' },
    { word: 'strategy', phonetic: '/ˈstrætədʒi/', meaning: 'a plan or method to get the answer', meaningZh: '策略', example: 'Use a drawing strategy.' },
    { word: 'check', phonetic: '/tʃek/', meaning: 'to make sure your answer is correct', meaningZh: '驗算', example: 'Always check your answer.' },
    { word: 'answer', phonetic: '/ˈɑːnsər/', meaning: 'the result; the solution', meaningZh: '答案', example: 'The answer is 16.' },
    { word: 'method', phonetic: '/ˈmeθəd/', meaning: 'a way of doing something', meaningZh: '方法', example: 'What method did you use?' },
  ],
  angles: [
    { word: 'angle', phonetic: '/ˈæŋɡl/', meaning: 'the space between two lines that meet at a point', meaningZh: '角', example: 'Measure the angle with a protractor.' },
    { word: 'degree', phonetic: '/dɪˈɡriː/', meaning: 'the unit for measuring angles (°)', meaningZh: '度', example: 'A right angle is 90 degrees.' },
    { word: 'acute', phonetic: '/əˈkjuːt/', meaning: 'an angle less than 90°', meaningZh: '銳角', example: '45° is an acute angle.' },
    { word: 'obtuse', phonetic: '/əbˈtjuːs/', meaning: 'an angle between 90° and 180°', meaningZh: '鈍角', example: '120° is an obtuse angle.' },
    { word: 'right angle', phonetic: '/raɪt ˈæŋɡl/', meaning: 'an angle of exactly 90°', meaningZh: '直角', example: 'A corner of a book is a right angle.' },
    { word: 'protractor', phonetic: '/prəˈtræktər/', meaning: 'a tool to measure angles', meaningZh: '量角器', example: 'Use a protractor to measure.' },
  ],
  data: [
    { word: 'data', phonetic: '/ˈdeɪtə/', meaning: 'facts or numbers collected for study', meaningZh: '數據', example: 'We collected data about favourite colours.' },
    { word: 'tally', phonetic: '/ˈtæli/', meaning: 'marks to count things; |||| = 4', meaningZh: '計數', example: 'Use tally marks to count votes.' },
    { word: 'bar chart', phonetic: '/bɑːr tʃɑːrt/', meaning: 'a chart using bars to show amounts', meaningZh: '條形圖', example: 'The bar chart shows fruit sales.' },
    { word: 'pictogram', phonetic: '/ˈpɪktəɡræm/', meaning: 'a chart using pictures to represent data', meaningZh: '象形圖', example: 'Each smiley face means 2 students.' },
    { word: 'frequency', phonetic: '/ˈfriːkwənsi/', meaning: 'how often something happens', meaningZh: '頻率', example: 'The frequency of red is 5.' },
    { word: 'survey', phonetic: '/ˈsɜːrveɪ/', meaning: 'asking people questions to collect data', meaningZh: '調查', example: 'We did a survey about pets.' },
  ],
  ratio: [
    { word: 'ratio', phonetic: '/ˈreɪʃioʊ/', meaning: 'a comparison of two amounts', meaningZh: '比率', example: 'The ratio of boys to girls is 3:2.' },
    { word: 'proportion', phonetic: '/prəˈpɔːrʃən/', meaning: 'a part compared to the whole', meaningZh: '比例', example: 'What proportion are red?' },
    { word: 'compare', phonetic: '/kəmˈpeər/', meaning: 'to look at differences between amounts', meaningZh: '比較', example: 'Compare these two groups.' },
    { word: 'for every', phonetic: '/fɔːr ˈevri/', meaning: 'in the ratio; for each group', meaningZh: '每…就有…', example: 'For every 2 cats, there are 3 dogs.' },
    { word: 'simplify', phonetic: '/ˈsɪmplɪfaɪ/', meaning: 'to make a ratio smaller using the same rule', meaningZh: '簡化', example: 'Simplify 4:8 to 1:2.' },
    { word: 'equivalent', phonetic: '/ɪˈkwɪvələnt/', meaning: 'equal in value; the same ratio', meaningZh: '等值的', example: '2:4 and 1:2 are equivalent.' },
  ],
  speed: [
    { word: 'speed', phonetic: '/spiːd/', meaning: 'how fast something moves', meaningZh: '速度', example: 'The speed of the car is 60 km/h.' },
    { word: 'distance', phonetic: '/ˈdɪstəns/', meaning: 'how far between two points', meaningZh: '距離', example: 'The distance is 100 metres.' },
    { word: 'time', phonetic: '/taɪm/', meaning: 'how long something takes', meaningZh: '時間', example: 'It takes 2 hours.' },
    { word: 'kilometre', phonetic: '/ˈkɪləmiːtər/', meaning: 'a unit of distance (km); 1000 m', meaningZh: '公里', example: 'The school is 3 kilometres away.' },
    { word: 'per hour', phonetic: '/pɜːr ˈaʊər/', meaning: 'in each hour; /h', meaningZh: '每小時', example: 'She runs 5 km per hour.' },
    { word: 'average', phonetic: '/ˈævərɪdʒ/', meaning: 'the middle value; total ÷ number', meaningZh: '平均', example: 'The average speed is 40 km/h.' },
  ],
  probability: [
    { word: 'probability', phonetic: '/ˌprɒbəˈbɪlɪti/', meaning: 'how likely something is to happen', meaningZh: '概率', example: 'The probability of heads is 1/2.' },
    { word: 'certain', phonetic: '/ˈsɜːrtən/', meaning: 'will definitely happen', meaningZh: '肯定的', example: 'It is certain the sun will rise.' },
    { word: 'impossible', phonetic: '/ɪmˈpɒsəbl/', meaning: 'cannot happen', meaningZh: '不可能的', example: 'Rolling 7 on a normal dice is impossible.' },
    { word: 'likely', phonetic: '/ˈlaɪkli/', meaning: 'will probably happen', meaningZh: '很可能的', example: 'It is likely to rain today.' },
    { word: 'unlikely', phonetic: '/ʌnˈlaɪkli/', meaning: 'probably will not happen', meaningZh: '不太可能的', example: 'Snow in summer is unlikely in HK.' },
    { word: 'chance', phonetic: '/tʃɑːns/', meaning: 'the possibility of something happening', meaningZh: '機會', example: 'There is a good chance of winning.' },
  ],
  volume: [
    { word: 'volume', phonetic: '/ˈvɒljuːm/', meaning: 'the space inside a 3D shape', meaningZh: '體積', example: 'The volume of the box is 24 cm³.' },
    { word: 'capacity', phonetic: '/kəˈpæsɪti/', meaning: 'how much a container can hold', meaningZh: '容量', example: 'The bottle has a capacity of 1 litre.' },
    { word: 'cubic', phonetic: '/ˈkjuːbɪk/', meaning: 'measured in three dimensions (cm³)', meaningZh: '立方的', example: 'Volume is measured in cubic centimetres.' },
    { word: 'height', phonetic: '/haɪt/', meaning: 'how tall something is', meaningZh: '高度', example: 'The height of the box is 5 cm.' },
    { word: 'depth', phonetic: '/depθ/', meaning: 'how deep something is', meaningZh: '深度', example: 'The pool has a depth of 2 metres.' },
    { word: 'container', phonetic: '/kənˈteɪnər/', meaning: 'something that holds things inside', meaningZh: '容器', example: 'Fill the container with water.' },
  ],
}

function createMathUnit(idx: number, title: string, theme: string, tip: string, words: string[], problems: { q: string; opts: string[]; ans: string; text: string }[]): Unit {
  const vocabEntries = mathVocabData[theme] || words.map((w, i) => ({
    word: w, phonetic: '', meaning: `a maths term used in ${theme}`, meaningZh: '', example: `We use "${w}" in ${theme}.`
  }))
  return {
    id: `m-u${idx}`, title, theme, mascotTip: tip,
    lessons: [{
      id: `m-u${idx}-l1`, title, objectives: [`Solve ${theme} problems`, `Use ${theme} vocabulary`],
      vocabulary: vocabEntries.map((v, i) => ({ id: `mv${(idx-1)*6+i+1}`, ...v })),
      listening: problems.map((p, i) => ({
        id: `ml${(idx-1)*3+i+1}`, type: 'mcq', instruction: 'Listen and solve.',
        ttsText: p.text, question: p.q, options: p.opts, correctAnswer: p.ans, hint: 'Think about the calculation'
      })),
      speaking: [
        { id: `ms${idx}a`, type: 'pronounce-word', instruction: 'Say:', targetText: vocabEntries[0].word, phonetic: vocabEntries[0].phonetic },
        { id: `ms${idx}b`, type: 'pronounce-sentence', instruction: 'Read the problem aloud:', targetText: problems[0].text.split('.')[0] + '.', hint: 'Clear maths language' },
      ],
      reading: [
        { id: `mr${idx}`, type: 'mcq', passage: problems.map(p => p.text).join(' '), question: problems[1].q, options: problems[1].opts, correctAnswer: problems[1].ans, explanation: problems[1].text },
      ],
      writing: [
        { id: `mw${idx}a`, type: 'spelling', instruction: 'Spell this maths word:', ttsText: vocabEntries[0].word, correctAnswer: vocabEntries[0].word, hint: `A ${theme} term` },
        { id: `mw${idx}b`, type: 'fill-blank', instruction: `Fill in: ${problems[0].q.replace('?', '_____')}`, correctAnswer: problems[0].ans, hint: 'Calculate!' },
      ],
    }]
  }
}

const mathUnits = getMathUnits()
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

// P5, Science, GS, Daily packs are generated after helper functions are defined below

// ============================================================
// Helper functions for generating content
// ============================================================

const genericVocabData: Record<string, { word: string; phonetic: string; meaning: string; meaningZh: string; example: string }[]> = {
  // === P5 English ===
  'Healthy Living': [
    { word: 'exercise', phonetic: '/ˈeksərsaɪz/', meaning: 'physical activity to stay fit', meaningZh: '運動', example: 'Exercise keeps your body strong.' },
    { word: 'balanced', phonetic: '/ˈbælənst/', meaning: 'having the right mix of things', meaningZh: '均衡的', example: 'Eat a balanced diet.' },
    { word: 'nutrition', phonetic: '/njuːˈtrɪʃən/', meaning: 'the food and goodness our body needs', meaningZh: '營養', example: 'Good nutrition helps you grow.' },
    { word: 'hygiene', phonetic: '/ˈhaɪdʒiːn/', meaning: 'keeping clean to stay healthy', meaningZh: '衛生', example: 'Wash hands for good hygiene.' },
    { word: 'vitamin', phonetic: '/ˈvɪtəmɪn/', meaning: 'nutrients in food that keep us healthy', meaningZh: '維他命', example: 'Oranges have vitamin C.' },
    { word: 'fitness', phonetic: '/ˈfɪtnəs/', meaning: 'being in good physical condition', meaningZh: '健康；體適能', example: 'Swimming improves your fitness.' },
  ],
  'Travel and Transport': [
    { word: 'journey', phonetic: '/ˈdʒɜːrni/', meaning: 'travelling from one place to another', meaningZh: '旅程', example: 'The journey takes two hours.' },
    { word: 'passenger', phonetic: '/ˈpæsɪndʒər/', meaning: 'a person riding in a vehicle', meaningZh: '乘客', example: 'The bus has many passengers.' },
    { word: 'departure', phonetic: '/dɪˈpɑːrtʃər/', meaning: 'the act of leaving', meaningZh: '出發；啟程', example: 'The departure time is 9 a.m.' },
    { word: 'arrival', phonetic: '/əˈraɪvl/', meaning: 'reaching the destination', meaningZh: '到達', example: 'Our arrival is at noon.' },
    { word: 'vehicle', phonetic: '/ˈviːɪkl/', meaning: 'a machine that carries people or things', meaningZh: '交通工具', example: 'A car is a vehicle.' },
    { word: 'route', phonetic: '/ruːt/', meaning: 'the way or path to travel', meaningZh: '路線', example: 'Which route shall we take?' },
  ],
  'The Environment': [
    { word: 'pollution', phonetic: '/pəˈluːʃən/', meaning: 'harmful substances in air, water, or soil', meaningZh: '污染', example: 'Air pollution makes us sick.' },
    { word: 'recycle', phonetic: '/riːˈsaɪkl/', meaning: 'to make old things into new ones', meaningZh: '回收', example: 'We recycle paper and plastic.' },
    { word: 'habitat', phonetic: '/ˈhæbɪtæt/', meaning: 'the natural home of an animal or plant', meaningZh: '棲息地', example: 'The forest is a bird habitat.' },
    { word: 'climate', phonetic: '/ˈklaɪmət/', meaning: 'the usual weather in a place over time', meaningZh: '氣候', example: 'Hong Kong has a tropical climate.' },
    { word: 'conservation', phonetic: '/ˌkɒnsərˈveɪʃən/', meaning: 'protecting nature and resources', meaningZh: '保育', example: 'Conservation saves animals.' },
    { word: 'renewable', phonetic: '/rɪˈnjuːəbl/', meaning: 'can be used again and again (e.g. solar)', meaningZh: '可再生的', example: 'Solar power is renewable energy.' },
  ],
  'Technology and Inventions': [
    { word: 'invention', phonetic: '/ɪnˈvenʃən/', meaning: 'something new that someone has made', meaningZh: '發明', example: 'The telephone was a great invention.' },
    { word: 'device', phonetic: '/dɪˈvaɪs/', meaning: 'a machine made for a specific purpose', meaningZh: '裝置', example: 'A tablet is a useful device.' },
    { word: 'software', phonetic: '/ˈsɒftweər/', meaning: 'programs that run on computers', meaningZh: '軟件', example: 'We use software to write reports.' },
    { word: 'internet', phonetic: '/ˈɪntərnet/', meaning: 'a global network connecting computers', meaningZh: '互聯網', example: 'I search on the internet.' },
    { word: 'robot', phonetic: '/ˈroʊbɒt/', meaning: 'a machine that can do tasks automatically', meaningZh: '機器人', example: 'The robot can clean the floor.' },
    { word: 'digital', phonetic: '/ˈdɪdʒɪtl/', meaning: 'using computer technology', meaningZh: '數碼的', example: 'We live in a digital age.' },
  ],
  'Space and Universe': [
    { word: 'planet', phonetic: '/ˈplænɪt/', meaning: 'a large object orbiting a star', meaningZh: '行星', example: 'Earth is a planet.' },
    { word: 'orbit', phonetic: '/ˈɔːrbɪt/', meaning: 'the path around a star or planet', meaningZh: '軌道', example: 'The Moon orbits the Earth.' },
    { word: 'gravity', phonetic: '/ˈɡrævɪti/', meaning: 'the force that pulls things down', meaningZh: '重力', example: 'Gravity keeps us on the ground.' },
    { word: 'astronaut', phonetic: '/ˈæstrənɔːt/', meaning: 'a person who travels in space', meaningZh: '太空人', example: 'The astronaut floated in space.' },
    { word: 'solar system', phonetic: '/ˈsoʊlər ˈsɪstəm/', meaning: 'the Sun and all objects orbiting it', meaningZh: '太陽系', example: 'There are 8 planets in our solar system.' },
    { word: 'galaxy', phonetic: '/ˈɡæləksi/', meaning: 'a huge group of stars', meaningZh: '銀河系', example: 'The Milky Way is our galaxy.' },
  ],
  // === Science ===
  'Plants and Growth': [
    { word: 'root', phonetic: '/ruːt/', meaning: 'the part of a plant underground that absorbs water', meaningZh: '根', example: 'Roots take in water from soil.' },
    { word: 'stem', phonetic: '/stem/', meaning: 'the main part of a plant that holds leaves', meaningZh: '莖', example: 'The stem supports the flower.' },
    { word: 'petal', phonetic: '/ˈpetl/', meaning: 'the colourful part of a flower', meaningZh: '花瓣', example: 'Roses have soft petals.' },
    { word: 'seed', phonetic: '/siːd/', meaning: 'the small part from which a new plant grows', meaningZh: '種子', example: 'Plant the seed in soil.' },
    { word: 'sunlight', phonetic: '/ˈsʌnlaɪt/', meaning: 'light from the Sun needed by plants', meaningZh: '陽光', example: 'Plants need sunlight to grow.' },
    { word: 'photosynthesis', phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/', meaning: 'how plants make food using light', meaningZh: '光合作用', example: 'Photosynthesis needs sunlight and water.' },
  ],
  'Materials and Properties': [
    { word: 'material', phonetic: '/məˈtɪəriəl/', meaning: 'what something is made of', meaningZh: '材料', example: 'Wood is a natural material.' },
    { word: 'transparent', phonetic: '/trænsˈpærənt/', meaning: 'you can see through it clearly', meaningZh: '透明的', example: 'Glass is transparent.' },
    { word: 'opaque', phonetic: '/oʊˈpeɪk/', meaning: 'you cannot see through it', meaningZh: '不透明的', example: 'A wooden door is opaque.' },
    { word: 'flexible', phonetic: '/ˈfleksəbl/', meaning: 'can be bent without breaking', meaningZh: '有彈性的', example: 'Rubber is flexible.' },
    { word: 'rigid', phonetic: '/ˈrɪdʒɪd/', meaning: 'hard and cannot bend', meaningZh: '堅硬的', example: 'Metal is rigid.' },
    { word: 'absorbent', phonetic: '/əbˈzɔːrbənt/', meaning: 'can soak up liquid', meaningZh: '有吸水性的', example: 'A sponge is absorbent.' },
  ],
  'Forces and Movement': [
    { word: 'force', phonetic: '/fɔːrs/', meaning: 'a push or pull that moves things', meaningZh: '力', example: 'A force can push a ball.' },
    { word: 'friction', phonetic: '/ˈfrɪkʃən/', meaning: 'a force that slows things down', meaningZh: '摩擦力', example: 'Friction stops the car.' },
    { word: 'gravity', phonetic: '/ˈɡrævɪti/', meaning: 'the force pulling everything down', meaningZh: '重力', example: 'Gravity makes apples fall.' },
    { word: 'push', phonetic: '/pʊʃ/', meaning: 'to move something away from you', meaningZh: '推', example: 'Push the door open.' },
    { word: 'pull', phonetic: '/pʊl/', meaning: 'to move something towards you', meaningZh: '拉', example: 'Pull the rope hard.' },
    { word: 'motion', phonetic: '/ˈmoʊʃən/', meaning: 'the state of moving', meaningZh: '運動；移動', example: 'The ball is in motion.' },
  ],
  'The Human Body': [
    { word: 'skeleton', phonetic: '/ˈskelɪtn/', meaning: 'the frame of bones in the body', meaningZh: '骨骼', example: 'The skeleton protects organs.' },
    { word: 'muscle', phonetic: '/ˈmʌsl/', meaning: 'body tissue that helps us move', meaningZh: '肌肉', example: 'Muscles help you run.' },
    { word: 'organ', phonetic: '/ˈɔːrɡən/', meaning: 'a body part with a specific job', meaningZh: '器官', example: 'The heart is an organ.' },
    { word: 'lungs', phonetic: '/lʌŋz/', meaning: 'organs we breathe with', meaningZh: '肺', example: 'Lungs take in oxygen.' },
    { word: 'blood', phonetic: '/blʌd/', meaning: 'the red liquid flowing in our body', meaningZh: '血液', example: 'Blood carries oxygen around.' },
    { word: 'brain', phonetic: '/breɪn/', meaning: 'the organ that controls thinking', meaningZh: '腦', example: 'The brain controls the body.' },
  ],
  'Light and Shadow': [
    { word: 'light', phonetic: '/laɪt/', meaning: 'energy that lets us see', meaningZh: '光', example: 'Light comes from the Sun.' },
    { word: 'shadow', phonetic: '/ˈʃædoʊ/', meaning: 'a dark area made when light is blocked', meaningZh: '影子', example: 'My shadow is long at sunset.' },
    { word: 'reflect', phonetic: '/rɪˈflekt/', meaning: 'to bounce light off a surface', meaningZh: '反射', example: 'Mirrors reflect light.' },
    { word: 'source', phonetic: '/sɔːrs/', meaning: 'where light comes from', meaningZh: '來源', example: 'The lamp is a light source.' },
    { word: 'ray', phonetic: '/reɪ/', meaning: 'a beam of light', meaningZh: '光線', example: 'Sun rays come through the window.' },
    { word: 'darkness', phonetic: '/ˈdɑːrknəs/', meaning: 'the absence of light', meaningZh: '黑暗', example: 'We cannot see in darkness.' },
  ],
  'Sound and Hearing': [
    { word: 'vibration', phonetic: '/vaɪˈbreɪʃən/', meaning: 'a quick back-and-forth movement that makes sound', meaningZh: '振動', example: 'Sound is made by vibrations.' },
    { word: 'volume', phonetic: '/ˈvɒljuːm/', meaning: 'how loud or quiet a sound is', meaningZh: '音量', example: 'Turn down the volume.' },
    { word: 'pitch', phonetic: '/pɪtʃ/', meaning: 'how high or low a sound is', meaningZh: '音調', example: 'A whistle has a high pitch.' },
    { word: 'echo', phonetic: '/ˈekoʊ/', meaning: 'a sound that bounces back', meaningZh: '回聲', example: 'I heard an echo in the cave.' },
    { word: 'ear', phonetic: '/ɪr/', meaning: 'the body part for hearing', meaningZh: '耳朵', example: 'Cover your ears if it is loud.' },
    { word: 'sound wave', phonetic: '/saʊnd weɪv/', meaning: 'how sound travels through air', meaningZh: '聲波', example: 'Sound waves travel to our ears.' },
  ],
  'Electricity': [
    { word: 'circuit', phonetic: '/ˈsɜːrkɪt/', meaning: 'a complete loop for electricity to flow', meaningZh: '電路', example: 'Connect the wires in a circuit.' },
    { word: 'battery', phonetic: '/ˈbætəri/', meaning: 'a device that stores electricity', meaningZh: '電池', example: 'The torch needs a battery.' },
    { word: 'switch', phonetic: '/swɪtʃ/', meaning: 'a device to turn power on or off', meaningZh: '開關', example: 'Press the switch to turn on light.' },
    { word: 'conductor', phonetic: '/kənˈdʌktər/', meaning: 'a material electricity flows through', meaningZh: '導體', example: 'Metal is a good conductor.' },
    { word: 'insulator', phonetic: '/ˈɪnsjuleɪtər/', meaning: 'a material that blocks electricity', meaningZh: '絕緣體', example: 'Rubber is an insulator.' },
    { word: 'bulb', phonetic: '/bʌlb/', meaning: 'a glass object that makes light with electricity', meaningZh: '燈泡', example: 'The bulb lights up the room.' },
  ],
  'Magnets': [
    { word: 'magnet', phonetic: '/ˈmæɡnɪt/', meaning: 'an object that attracts iron', meaningZh: '磁鐵', example: 'A magnet sticks to the fridge.' },
    { word: 'attract', phonetic: '/əˈtrækt/', meaning: 'to pull towards', meaningZh: '吸引', example: 'Magnets attract metal objects.' },
    { word: 'repel', phonetic: '/rɪˈpel/', meaning: 'to push away', meaningZh: '排斥', example: 'Same poles repel each other.' },
    { word: 'pole', phonetic: '/poʊl/', meaning: 'the end of a magnet (north or south)', meaningZh: '磁極', example: 'Every magnet has a north pole.' },
    { word: 'magnetic', phonetic: '/mæɡˈnetɪk/', meaning: 'having the properties of a magnet', meaningZh: '有磁性的', example: 'Iron is magnetic.' },
    { word: 'compass', phonetic: '/ˈkʌmpəs/', meaning: 'a tool using magnets to show direction', meaningZh: '指南針', example: 'A compass points north.' },
  ],
  'Water Cycle': [
    { word: 'evaporation', phonetic: '/ɪˌvæpəˈreɪʃən/', meaning: 'water turning into water vapour', meaningZh: '蒸發', example: 'The sun causes evaporation.' },
    { word: 'condensation', phonetic: '/ˌkɒndenˈseɪʃən/', meaning: 'water vapour turning back into liquid', meaningZh: '凝結', example: 'Condensation forms clouds.' },
    { word: 'precipitation', phonetic: '/prɪˌsɪpɪˈteɪʃən/', meaning: 'water falling as rain or snow', meaningZh: '降水', example: 'Rain is a form of precipitation.' },
    { word: 'vapour', phonetic: '/ˈveɪpər/', meaning: 'water in the form of gas', meaningZh: '水蒸氣', example: 'Steam is water vapour.' },
    { word: 'cloud', phonetic: '/klaʊd/', meaning: 'a mass of tiny water drops in the sky', meaningZh: '雲', example: 'Clouds are made of water.' },
    { word: 'collection', phonetic: '/kəˈlekʃən/', meaning: 'water gathering in rivers and seas', meaningZh: '收集', example: 'Water collection happens in oceans.' },
  ],
  'Food Chains': [
    { word: 'producer', phonetic: '/prəˈdjuːsər/', meaning: 'a living thing that makes its own food (plants)', meaningZh: '生產者', example: 'Grass is a producer.' },
    { word: 'consumer', phonetic: '/kənˈsjuːmər/', meaning: 'a living thing that eats other things', meaningZh: '消費者', example: 'A rabbit is a consumer.' },
    { word: 'predator', phonetic: '/ˈpredətər/', meaning: 'an animal that hunts others', meaningZh: '捕食者', example: 'A lion is a predator.' },
    { word: 'prey', phonetic: '/preɪ/', meaning: 'an animal that is hunted', meaningZh: '獵物', example: 'A mouse is prey for owls.' },
    { word: 'herbivore', phonetic: '/ˈhɜːrbɪvɔːr/', meaning: 'an animal that eats only plants', meaningZh: '草食動物', example: 'A cow is a herbivore.' },
    { word: 'carnivore', phonetic: '/ˈkɑːrnɪvɔːr/', meaning: 'an animal that eats only meat', meaningZh: '肉食動物', example: 'A tiger is a carnivore.' },
  ],
  // === General Studies ===
  'Our Community': [
    { word: 'community', phonetic: '/kəˈmjuːnəti/', meaning: 'a group of people living in the same area', meaningZh: '社區', example: 'Our community has a park.' },
    { word: 'neighbour', phonetic: '/ˈneɪbər/', meaning: 'a person living near you', meaningZh: '鄰居', example: 'My neighbour is friendly.' },
    { word: 'volunteer', phonetic: '/ˌvɒlənˈtɪr/', meaning: 'a person who helps without pay', meaningZh: '義工', example: 'She is a volunteer at the centre.' },
    { word: 'facility', phonetic: '/fəˈsɪlɪti/', meaning: 'a building or place for a purpose', meaningZh: '設施', example: 'The pool is a public facility.' },
    { word: 'service', phonetic: '/ˈsɜːrvɪs/', meaning: 'work done to help others', meaningZh: '服務', example: 'The fire service keeps us safe.' },
    { word: 'resident', phonetic: '/ˈrezɪdənt/', meaning: 'a person who lives in a place', meaningZh: '居民', example: 'Residents look after the estate.' },
  ],
  'Hong Kong Geography': [
    { word: 'harbour', phonetic: '/ˈhɑːrbər/', meaning: 'a sheltered area of water for ships', meaningZh: '海港', example: 'Victoria Harbour is famous.' },
    { word: 'island', phonetic: '/ˈaɪlənd/', meaning: 'land surrounded by water', meaningZh: '島嶼', example: 'Hong Kong Island is busy.' },
    { word: 'peninsula', phonetic: '/pəˈnɪnsjulə/', meaning: 'land surrounded by water on three sides', meaningZh: '半島', example: 'Kowloon is a peninsula.' },
    { word: 'territory', phonetic: '/ˈterɪtɔːri/', meaning: 'an area of land under one government', meaningZh: '領土', example: 'The New Territories are large.' },
    { word: 'mountain', phonetic: '/ˈmaʊntən/', meaning: 'very high land', meaningZh: '山', example: 'Tai Mo Shan is the tallest mountain.' },
    { word: 'coast', phonetic: '/koʊst/', meaning: 'land next to the sea', meaningZh: '海岸', example: 'We walked along the coast.' },
  ],
  'Healthy Habits and Safety': [
    { word: 'habit', phonetic: '/ˈhæbɪt/', meaning: 'something you do regularly', meaningZh: '習慣', example: 'Brushing teeth is a good habit.' },
    { word: 'safety', phonetic: '/ˈseɪfti/', meaning: 'being protected from danger', meaningZh: '安全', example: 'Safety first when crossing roads.' },
    { word: 'helmet', phonetic: '/ˈhelmɪt/', meaning: 'a hard hat that protects the head', meaningZh: '頭盔', example: 'Wear a helmet when cycling.' },
    { word: 'emergency', phonetic: '/ɪˈmɜːrdʒənsi/', meaning: 'a sudden dangerous situation', meaningZh: '緊急情況', example: 'Call 999 in an emergency.' },
    { word: 'pedestrian', phonetic: '/pəˈdestriən/', meaning: 'a person walking on foot', meaningZh: '行人', example: 'The pedestrian crossed at the light.' },
    { word: 'prevention', phonetic: '/prɪˈvenʃən/', meaning: 'stopping something bad from happening', meaningZh: '預防', example: 'Prevention is better than cure.' },
  ],
  'Chinese Festivals': [
    { word: 'festival', phonetic: '/ˈfestɪvl/', meaning: 'a special celebration day', meaningZh: '節日', example: 'Chinese New Year is a big festival.' },
    { word: 'tradition', phonetic: '/trəˈdɪʃən/', meaning: 'a custom passed down over time', meaningZh: '傳統', example: 'Dragon boat racing is a tradition.' },
    { word: 'lantern', phonetic: '/ˈlæntərn/', meaning: 'a light in a decorative case', meaningZh: '燈籠', example: 'We carry lanterns at Mid-Autumn.' },
    { word: 'dumpling', phonetic: '/ˈdʌmplɪŋ/', meaning: 'food wrapped in thin dough', meaningZh: '餃子', example: 'We eat dumplings at New Year.' },
    { word: 'celebration', phonetic: '/ˌselɪˈbreɪʃən/', meaning: 'a special event to mark an occasion', meaningZh: '慶祝', example: 'The celebration was exciting.' },
    { word: 'ancestor', phonetic: '/ˈænsestər/', meaning: 'a family member from long ago', meaningZh: '祖先', example: 'We honour our ancestors.' },
  ],
  'Transport in Hong Kong': [
    { word: 'MTR', phonetic: '/ˌemtiːˈɑːr/', meaning: 'the underground railway system in HK', meaningZh: '港鐵', example: 'I take the MTR to school.' },
    { word: 'ferry', phonetic: '/ˈferi/', meaning: 'a boat that carries people across water', meaningZh: '渡輪', example: 'The Star Ferry crosses the harbour.' },
    { word: 'tram', phonetic: '/træm/', meaning: 'an electric rail vehicle on streets', meaningZh: '電車', example: 'The tram runs on Hong Kong Island.' },
    { word: 'minibus', phonetic: '/ˈmɪnibʌs/', meaning: 'a small public bus', meaningZh: '小巴', example: 'The red minibus is fast.' },
    { word: 'octopus card', phonetic: '/ˈɒktəpəs kɑːrd/', meaning: 'a contactless payment card for transport', meaningZh: '八達通', example: 'Tap your Octopus card here.' },
    { word: 'peak tram', phonetic: '/piːk træm/', meaning: 'a funicular railway going up Victoria Peak', meaningZh: '山頂纜車', example: 'The Peak Tram is a tourist attraction.' },
  ],
}

function createGenericUnit(prefix: string, idx: number, title: string, subject: string): Unit {
  const theme = title.toLowerCase().replace(/ and /g, '-').replace(/ /g, '-')
  const mascot = idx % 2 === 0 ? 'Tat' : 'Tot'
  const vocabEntries = genericVocabData[title]
  const hasVocab = vocabEntries && vocabEntries.length > 0
  const vocab = hasVocab
    ? vocabEntries.map((v, i) => ({ id: `${prefix}-v${(idx-1)*6+i+1}`, ...v }))
    : Array.from({ length: 6 }, (_, i) => ({
        id: `${prefix}-v${(idx-1)*6+i+1}`,
        word: getDefaultWord(title, i),
        phonetic: '',
        meaning: `a word related to ${title.toLowerCase()}`,
        meaningZh: '',
        example: `This word is used when talking about ${title.toLowerCase()}.`
      }))
  return {
    id: `${prefix}-u${idx}`, title, theme,
    mascotTip: `${mascot} says: Let's explore ${title.toLowerCase()}!`,
    lessons: [{
      id: `${prefix}-u${idx}-l1`, title, objectives: [`Learn ${title} vocabulary`, `Discuss ${title} topics`],
      vocabulary: vocab,
      listening: [
        { id: `${prefix}-l${idx}a`, type: 'mcq', instruction: `Listen about ${title}.`, ttsText: `${vocab[0].example} ${vocab[1].example}`, question: `What is "${vocab[0].word}"?`, options: [vocab[0].meaning, vocab[1].meaning, vocab[2].meaning], correctAnswer: vocab[0].meaning, hint: 'Listen to the first sentence' },
      ],
      speaking: [
        { id: `${prefix}-s${idx}a`, type: 'pronounce-word', instruction: 'Say this word:', targetText: vocab[0].word, phonetic: vocab[0].phonetic },
        { id: `${prefix}-s${idx}b`, type: 'pronounce-sentence', instruction: 'Read aloud:', targetText: vocab[0].example, hint: 'Clear pronunciation' },
      ],
      reading: [
        { id: `${prefix}-r${idx}`, type: 'mcq', passage: `${title} is an important topic in ${subject}. ${vocab.slice(0, 3).map(v => v.example).join(' ')}`, question: `What does "${vocab[1].word}" mean?`, options: [vocab[1].meaning, vocab[0].meaning, vocab[2].meaning], correctAnswer: vocab[1].meaning, explanation: vocab[1].meaning },
      ],
      writing: [
        { id: `${prefix}-w${idx}a`, type: 'spelling', instruction: 'Spell this word:', ttsText: vocab[0].word, correctAnswer: vocab[0].word, hint: vocab[0].meaningZh || vocab[0].meaning },
        { id: `${prefix}-w${idx}b`, type: 'spelling', instruction: 'Spell this word:', ttsText: vocab[1].word, correctAnswer: vocab[1].word, hint: vocab[1].meaningZh || vocab[1].meaning },
      ],
    }]
  }
}

function getDefaultWord(title: string, i: number): string {
  const words = title.toLowerCase().split(/\s+/)
  if (i < words.length) return words[i]
  return `${words[0]}${i + 1}`
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
    1: [ // My Family
      { id: 'v1', word: 'mother', phonetic: '/ˈmʌðər/', meaning: 'female parent', meaningZh: '母親', example: 'My mother is a teacher.' },
      { id: 'v2', word: 'father', phonetic: '/ˈfɑːðər/', meaning: 'male parent', meaningZh: '父親', example: 'My father likes to cook.' },
      { id: 'v3', word: 'brother', phonetic: '/ˈbrʌðər/', meaning: 'male sibling', meaningZh: '兄弟', example: 'I have one brother.' },
      { id: 'v4', word: 'sister', phonetic: '/ˈsɪstər/', meaning: 'female sibling', meaningZh: '姐妹', example: 'My sister is younger.' },
      { id: 'v5', word: 'grandmother', phonetic: '/ˈɡrænˌmʌðər/', meaning: 'parent\'s mother', meaningZh: '祖母', example: 'Grandmother tells stories.' },
      { id: 'v6', word: 'uncle', phonetic: '/ˈʌŋkl/', meaning: 'parent\'s brother', meaningZh: '叔叔', example: 'My uncle lives nearby.' },
    ],
    2: [ // My Home
      { id: 'v7', word: 'bedroom', phonetic: '/ˈbedruːm/', meaning: 'a room for sleeping', meaningZh: '睡房', example: 'I read in my bedroom.' },
      { id: 'v8', word: 'kitchen', phonetic: '/ˈkɪtʃɪn/', meaning: 'a room for cooking food', meaningZh: '廚房', example: 'Mum cooks in the kitchen.' },
      { id: 'v9', word: 'bathroom', phonetic: '/ˈbɑːθruːm/', meaning: 'a room for washing', meaningZh: '浴室', example: 'I brush my teeth in the bathroom.' },
      { id: 'v10', word: 'living room', phonetic: '/ˈlɪvɪŋ ruːm/', meaning: 'a room for relaxing with family', meaningZh: '客廳', example: 'We watch TV in the living room.' },
      { id: 'v11', word: 'balcony', phonetic: '/ˈbælkəni/', meaning: 'an outdoor platform on a building', meaningZh: '陽台', example: 'I can see the park from the balcony.' },
      { id: 'v12', word: 'furniture', phonetic: '/ˈfɜːrnɪtʃər/', meaning: 'things like tables and chairs in a room', meaningZh: '傢具', example: 'We bought new furniture.' },
    ],
    3: [ // Food and Drinks
      { id: 'v13', word: 'breakfast', phonetic: '/ˈbrekfəst/', meaning: 'the first meal of the day', meaningZh: '早餐', example: 'I eat eggs for breakfast.' },
      { id: 'v14', word: 'lunch', phonetic: '/lʌntʃ/', meaning: 'the midday meal', meaningZh: '午餐', example: 'We have lunch at school.' },
      { id: 'v15', word: 'dinner', phonetic: '/ˈdɪnər/', meaning: 'the evening meal', meaningZh: '晚餐', example: 'Dinner is at 7 o\'clock.' },
      { id: 'v16', word: 'thirsty', phonetic: '/ˈθɜːrsti/', meaning: 'wanting something to drink', meaningZh: '口渴的', example: 'I am thirsty after running.' },
      { id: 'v17', word: 'delicious', phonetic: '/dɪˈlɪʃəs/', meaning: 'very tasty', meaningZh: '美味的', example: 'The cake is delicious.' },
      { id: 'v18', word: 'healthy', phonetic: '/ˈhelθi/', meaning: 'good for your body', meaningZh: '健康的', example: 'Fruit is a healthy snack.' },
    ],
    4: [ // My School
      { id: 'v19', word: 'classroom', phonetic: '/ˈklɑːsruːm/', meaning: 'a room where lessons happen', meaningZh: '教室', example: 'Our classroom is on the third floor.' },
      { id: 'v20', word: 'teacher', phonetic: '/ˈtiːtʃər/', meaning: 'a person who teaches', meaningZh: '老師', example: 'Our teacher is kind.' },
      { id: 'v21', word: 'homework', phonetic: '/ˈhoʊmwɜːrk/', meaning: 'schoolwork done at home', meaningZh: '功課', example: 'I finish my homework before dinner.' },
      { id: 'v22', word: 'uniform', phonetic: '/ˈjuːnɪfɔːrm/', meaning: 'special clothes for school', meaningZh: '校服', example: 'I wear a uniform to school.' },
      { id: 'v23', word: 'assembly', phonetic: '/əˈsembli/', meaning: 'a school meeting for all students', meaningZh: '集會', example: 'We sing at morning assembly.' },
      { id: 'v24', word: 'recess', phonetic: '/rɪˈses/', meaning: 'a break between lessons', meaningZh: '小息', example: 'I play with friends at recess.' },
    ],
    5: [ // Animals
      { id: 'v25', word: 'mammal', phonetic: '/ˈmæml/', meaning: 'a warm-blooded animal that feeds milk', meaningZh: '哺乳動物', example: 'A dog is a mammal.' },
      { id: 'v26', word: 'reptile', phonetic: '/ˈreptaɪl/', meaning: 'a cold-blooded animal with scales', meaningZh: '爬蟲類', example: 'A snake is a reptile.' },
      { id: 'v27', word: 'insect', phonetic: '/ˈɪnsekt/', meaning: 'a tiny creature with six legs', meaningZh: '昆蟲', example: 'A butterfly is an insect.' },
      { id: 'v28', word: 'feather', phonetic: '/ˈfeðər/', meaning: 'light covering on a bird', meaningZh: '羽毛', example: 'Birds have feathers.' },
      { id: 'v29', word: 'habitat', phonetic: '/ˈhæbɪtæt/', meaning: 'the natural home of an animal', meaningZh: '棲息地', example: 'The ocean is a whale\'s habitat.' },
      { id: 'v30', word: 'endangered', phonetic: '/ɪnˈdeɪndʒərd/', meaning: 'at risk of dying out', meaningZh: '瀕危的', example: 'Pandas are endangered animals.' },
    ],
    6: [ // Weather and Seasons
      { id: 'v31', word: 'sunny', phonetic: '/ˈsʌni/', meaning: 'bright with sunshine', meaningZh: '晴朗的', example: 'It is sunny today.' },
      { id: 'v32', word: 'cloudy', phonetic: '/ˈklaʊdi/', meaning: 'covered with clouds', meaningZh: '多雲的', example: 'The sky is cloudy.' },
      { id: 'v33', word: 'typhoon', phonetic: '/taɪˈfuːn/', meaning: 'a strong tropical storm', meaningZh: '颱風', example: 'A typhoon brings strong wind.' },
      { id: 'v34', word: 'temperature', phonetic: '/ˈtemprətʃər/', meaning: 'how hot or cold it is', meaningZh: '溫度', example: 'The temperature is 30 degrees.' },
      { id: 'v35', word: 'season', phonetic: '/ˈsiːzn/', meaning: 'a time of year (spring, summer, etc.)', meaningZh: '季節', example: 'Summer is my favourite season.' },
      { id: 'v36', word: 'humid', phonetic: '/ˈhjuːmɪd/', meaning: 'having a lot of moisture in the air', meaningZh: '潮濕的', example: 'Hong Kong is very humid in spring.' },
    ],
    7: [ // Shopping
      { id: 'v37', word: 'receipt', phonetic: '/rɪˈsiːt/', meaning: 'a paper showing what you paid', meaningZh: '收據', example: 'Keep the receipt.' },
      { id: 'v38', word: 'cashier', phonetic: '/kæˈʃɪr/', meaning: 'the person who takes your money', meaningZh: '收銀員', example: 'Pay the cashier at the counter.' },
      { id: 'v39', word: 'bargain', phonetic: '/ˈbɑːrɡɪn/', meaning: 'something sold at a low price', meaningZh: '便宜貨', example: 'This shirt is a bargain!' },
      { id: 'v40', word: 'size', phonetic: '/saɪz/', meaning: 'how big or small something is', meaningZh: '尺寸', example: 'What size do you need?' },
      { id: 'v41', word: 'fitting room', phonetic: '/ˈfɪtɪŋ ruːm/', meaning: 'a room to try on clothes', meaningZh: '試衣間', example: 'I\'ll try this in the fitting room.' },
      { id: 'v42', word: 'queue', phonetic: '/kjuː/', meaning: 'a line of people waiting', meaningZh: '排隊', example: 'Please join the queue.' },
    ],
    8: [ // Sports and Hobbies
      { id: 'v43', word: 'badminton', phonetic: '/ˈbædmɪntən/', meaning: 'a sport using rackets and a shuttlecock', meaningZh: '羽毛球', example: 'I play badminton after school.' },
      { id: 'v44', word: 'swimming', phonetic: '/ˈswɪmɪŋ/', meaning: 'moving through water', meaningZh: '游泳', example: 'Swimming is good exercise.' },
      { id: 'v45', word: 'hobby', phonetic: '/ˈhɒbi/', meaning: 'an activity you enjoy in free time', meaningZh: '愛好', example: 'Drawing is my hobby.' },
      { id: 'v46', word: 'competition', phonetic: '/ˌkɒmpəˈtɪʃən/', meaning: 'a contest to find the best', meaningZh: '比賽', example: 'I won the drawing competition.' },
      { id: 'v47', word: 'practice', phonetic: '/ˈpræktɪs/', meaning: 'to do something again and again to improve', meaningZh: '練習', example: 'I practice piano every day.' },
      { id: 'v48', word: 'score', phonetic: '/skɔːr/', meaning: 'points won in a game', meaningZh: '分數', example: 'The final score was 3 to 1.' },
    ],
    9: [ // Holidays
      { id: 'v49', word: 'holiday', phonetic: '/ˈhɒlɪdeɪ/', meaning: 'a time away from school or work', meaningZh: '假期', example: 'We go to the beach on holiday.' },
      { id: 'v50', word: 'suitcase', phonetic: '/ˈsuːtkeɪs/', meaning: 'a bag for carrying clothes on trips', meaningZh: '行李箱', example: 'I packed my suitcase.' },
      { id: 'v51', word: 'passport', phonetic: '/ˈpɑːspɔːrt/', meaning: 'an official travel document', meaningZh: '護照', example: 'Show your passport at the airport.' },
      { id: 'v52', word: 'souvenir', phonetic: '/ˌsuːvəˈnɪr/', meaning: 'a thing bought to remember a trip', meaningZh: '紀念品', example: 'I bought a souvenir keychain.' },
      { id: 'v53', word: 'hotel', phonetic: '/hoʊˈtel/', meaning: 'a place to stay when travelling', meaningZh: '酒店', example: 'We stayed at a nice hotel.' },
      { id: 'v54', word: 'explore', phonetic: '/ɪkˈsplɔːr/', meaning: 'to travel and discover new places', meaningZh: '探索', example: 'Let\'s explore the old town.' },
    ],
    10: [ // Jobs and Work
      { id: 'v55', word: 'doctor', phonetic: '/ˈdɒktər/', meaning: 'a person who helps sick people', meaningZh: '醫生', example: 'The doctor checks my health.' },
      { id: 'v56', word: 'firefighter', phonetic: '/ˈfaɪərfaɪtər/', meaning: 'a person who puts out fires', meaningZh: '消防員', example: 'Firefighters are brave.' },
      { id: 'v57', word: 'pilot', phonetic: '/ˈpaɪlət/', meaning: 'a person who flies an aeroplane', meaningZh: '飛機師', example: 'The pilot flies the plane.' },
      { id: 'v58', word: 'engineer', phonetic: '/ˌendʒɪˈnɪr/', meaning: 'a person who designs or builds things', meaningZh: '工程師', example: 'The engineer built a bridge.' },
      { id: 'v59', word: 'salary', phonetic: '/ˈsæləri/', meaning: 'money paid for work', meaningZh: '薪水', example: 'She earns a good salary.' },
      { id: 'v60', word: 'career', phonetic: '/kəˈrɪr/', meaning: 'a job or profession for a long time', meaningZh: '職業', example: 'I want a career in science.' },
    ],
    11: [ // The City
      { id: 'v61', word: 'skyscraper', phonetic: '/ˈskaɪskreɪpər/', meaning: 'a very tall building', meaningZh: '摩天大樓', example: 'Hong Kong has many skyscrapers.' },
      { id: 'v62', word: 'traffic', phonetic: '/ˈtræfɪk/', meaning: 'vehicles moving on roads', meaningZh: '交通', example: 'There is heavy traffic at rush hour.' },
      { id: 'v63', word: 'intersection', phonetic: '/ˌɪntərˈsekʃən/', meaning: 'where two roads cross', meaningZh: '十字路口', example: 'Stop at the intersection.' },
      { id: 'v64', word: 'pavement', phonetic: '/ˈpeɪvmənt/', meaning: 'a path beside the road for walking', meaningZh: '行人路', example: 'Walk on the pavement.' },
      { id: 'v65', word: 'pollution', phonetic: '/pəˈluːʃən/', meaning: 'dirty air or water from cars or factories', meaningZh: '污染', example: 'City pollution is a problem.' },
      { id: 'v66', word: 'crowded', phonetic: '/ˈkraʊdɪd/', meaning: 'full of many people', meaningZh: '擠迫的', example: 'The MTR is crowded in the morning.' },
    ],
    12: [ // Health and Body
      { id: 'v67', word: 'stomach', phonetic: '/ˈstʌmək/', meaning: 'the organ that digests food', meaningZh: '胃', example: 'My stomach hurts after eating too much.' },
      { id: 'v68', word: 'fever', phonetic: '/ˈfiːvər/', meaning: 'a body temperature higher than normal', meaningZh: '發燒', example: 'I have a fever today.' },
      { id: 'v69', word: 'medicine', phonetic: '/ˈmedɪsɪn/', meaning: 'something you take when you are sick', meaningZh: '藥物', example: 'Take the medicine after meals.' },
      { id: 'v70', word: 'cough', phonetic: '/kɒf/', meaning: 'to push air out noisily from the throat', meaningZh: '咳嗽', example: 'Cover your mouth when you cough.' },
      { id: 'v71', word: 'bandage', phonetic: '/ˈbændɪdʒ/', meaning: 'a strip of cloth to wrap a wound', meaningZh: '繃帶', example: 'The nurse put a bandage on my knee.' },
      { id: 'v72', word: 'exercise', phonetic: '/ˈeksərsaɪz/', meaning: 'physical activity to keep fit', meaningZh: '運動', example: 'Regular exercise keeps you healthy.' },
    ],
    13: [ // Nature
      { id: 'v73', word: 'forest', phonetic: '/ˈfɒrɪst/', meaning: 'a large area covered with trees', meaningZh: '森林', example: 'Many animals live in the forest.' },
      { id: 'v74', word: 'river', phonetic: '/ˈrɪvər/', meaning: 'a large stream of flowing water', meaningZh: '河流', example: 'Fish swim in the river.' },
      { id: 'v75', word: 'mountain', phonetic: '/ˈmaʊntən/', meaning: 'a very high hill', meaningZh: '山', example: 'We hiked up the mountain.' },
      { id: 'v76', word: 'waterfall', phonetic: '/ˈwɔːtərfɔːl/', meaning: 'water falling from a high place', meaningZh: '瀑布', example: 'The waterfall is beautiful.' },
      { id: 'v77', word: 'pond', phonetic: '/pɒnd/', meaning: 'a small body of still water', meaningZh: '池塘', example: 'Frogs live near the pond.' },
      { id: 'v78', word: 'wildlife', phonetic: '/ˈwaɪldlaɪf/', meaning: 'animals and plants living in nature', meaningZh: '野生動物', example: 'We must protect wildlife.' },
    ],
    14: [ // Technology
      { id: 'v79', word: 'computer', phonetic: '/kəmˈpjuːtər/', meaning: 'an electronic machine for work and games', meaningZh: '電腦', example: 'I use the computer for homework.' },
      { id: 'v80', word: 'keyboard', phonetic: '/ˈkiːbɔːrd/', meaning: 'buttons you press to type', meaningZh: '鍵盤', example: 'Type using the keyboard.' },
      { id: 'v81', word: 'screen', phonetic: '/skriːn/', meaning: 'the display part of a device', meaningZh: '螢幕', example: 'Look at the screen.' },
      { id: 'v82', word: 'password', phonetic: '/ˈpɑːswɜːrd/', meaning: 'a secret word to log in', meaningZh: '密碼', example: 'Don\'t share your password.' },
      { id: 'v83', word: 'download', phonetic: '/ˈdaʊnloʊd/', meaning: 'to copy from the internet to your device', meaningZh: '下載', example: 'Download the app from the store.' },
      { id: 'v84', word: 'website', phonetic: '/ˈwebsaɪt/', meaning: 'a page on the internet', meaningZh: '網站', example: 'Visit the school website.' },
    ],
    15: [ // Music and Art
      { id: 'v85', word: 'melody', phonetic: '/ˈmelədi/', meaning: 'a tune; a sequence of musical notes', meaningZh: '旋律', example: 'The melody is beautiful.' },
      { id: 'v86', word: 'rhythm', phonetic: '/ˈrɪðəm/', meaning: 'a regular pattern of beats', meaningZh: '節奏', example: 'Clap to the rhythm.' },
      { id: 'v87', word: 'canvas', phonetic: '/ˈkænvəs/', meaning: 'a surface for painting on', meaningZh: '畫布', example: 'The artist painted on a canvas.' },
      { id: 'v88', word: 'sketch', phonetic: '/sketʃ/', meaning: 'a quick, rough drawing', meaningZh: '素描', example: 'She made a sketch of the flower.' },
      { id: 'v89', word: 'instrument', phonetic: '/ˈɪnstrəmənt/', meaning: 'a thing used to make music', meaningZh: '樂器', example: 'The piano is my favourite instrument.' },
      { id: 'v90', word: 'gallery', phonetic: '/ˈɡæləri/', meaning: 'a place to display art', meaningZh: '畫廊', example: 'We visited an art gallery.' },
    ],
    16: [ // Feelings and Emotions
      { id: 'v91', word: 'excited', phonetic: '/ɪkˈsaɪtɪd/', meaning: 'very happy and eager', meaningZh: '興奮的', example: 'I am excited about the trip.' },
      { id: 'v92', word: 'nervous', phonetic: '/ˈnɜːrvəs/', meaning: 'feeling worried or uneasy', meaningZh: '緊張的', example: 'I feel nervous before tests.' },
      { id: 'v93', word: 'proud', phonetic: '/praʊd/', meaning: 'feeling good about something you did', meaningZh: '自豪的', example: 'I am proud of my work.' },
      { id: 'v94', word: 'disappointed', phonetic: '/ˌdɪsəˈpɔɪntɪd/', meaning: 'sad because something did not go well', meaningZh: '失望的', example: 'I was disappointed about the rain.' },
      { id: 'v95', word: 'grateful', phonetic: '/ˈɡreɪtfəl/', meaning: 'feeling thankful', meaningZh: '感恩的', example: 'I am grateful for your help.' },
      { id: 'v96', word: 'confused', phonetic: '/kənˈfjuːzd/', meaning: 'not understanding something', meaningZh: '困惑的', example: 'I am confused by this question.' },
    ],
    17: [ // Books and Stories
      { id: 'v97', word: 'character', phonetic: '/ˈkærɪktər/', meaning: 'a person in a story', meaningZh: '角色', example: 'The main character is brave.' },
      { id: 'v98', word: 'author', phonetic: '/ˈɔːθər/', meaning: 'a person who writes books', meaningZh: '作者', example: 'Who is the author of this book?' },
      { id: 'v99', word: 'chapter', phonetic: '/ˈtʃæptər/', meaning: 'a section of a book', meaningZh: '章節', example: 'Read chapter 3 tonight.' },
      { id: 'v100', word: 'plot', phonetic: '/plɒt/', meaning: 'the main events of a story', meaningZh: '情節', example: 'The plot is very exciting.' },
      { id: 'v101', word: 'fiction', phonetic: '/ˈfɪkʃən/', meaning: 'stories that are made up', meaningZh: '小說；虛構作品', example: 'Harry Potter is fiction.' },
      { id: 'v102', word: 'library', phonetic: '/ˈlaɪbrəri/', meaning: 'a place to borrow books', meaningZh: '圖書館', example: 'I borrow books from the library.' },
    ],
    18: [ // Friends and Friendship
      { id: 'v103', word: 'loyal', phonetic: '/ˈlɔɪəl/', meaning: 'always supporting someone', meaningZh: '忠誠的', example: 'A good friend is loyal.' },
      { id: 'v104', word: 'trust', phonetic: '/trʌst/', meaning: 'to believe someone is honest', meaningZh: '信任', example: 'Friends trust each other.' },
      { id: 'v105', word: 'share', phonetic: '/ʃeər/', meaning: 'to give part of something to others', meaningZh: '分享', example: 'I share my snacks with friends.' },
      { id: 'v106', word: 'kind', phonetic: '/kaɪnd/', meaning: 'being nice and helpful to others', meaningZh: '善良的', example: 'She is always kind to everyone.' },
      { id: 'v107', word: 'apologise', phonetic: '/əˈpɒlədʒaɪz/', meaning: 'to say sorry', meaningZh: '道歉', example: 'I apologise for being late.' },
      { id: 'v108', word: 'cooperate', phonetic: '/koʊˈɒpəreɪt/', meaning: 'to work together', meaningZh: '合作', example: 'We cooperate on the project.' },
    ],
    19: [ // Travel
      { id: 'v109', word: 'destination', phonetic: '/ˌdestɪˈneɪʃən/', meaning: 'the place you are going to', meaningZh: '目的地', example: 'Japan is our destination.' },
      { id: 'v110', word: 'luggage', phonetic: '/ˈlʌɡɪdʒ/', meaning: 'bags and suitcases for a trip', meaningZh: '行李', example: 'Don\'t lose your luggage.' },
      { id: 'v111', word: 'boarding pass', phonetic: '/ˈbɔːrdɪŋ pɑːs/', meaning: 'a ticket to get on a plane', meaningZh: '登機證', example: 'Show your boarding pass at the gate.' },
      { id: 'v112', word: 'currency', phonetic: '/ˈkʌrənsi/', meaning: 'the money used in a country', meaningZh: '貨幣', example: 'Japanese currency is the yen.' },
      { id: 'v113', word: 'itinerary', phonetic: '/aɪˈtɪnərəri/', meaning: 'a plan of where to go on a trip', meaningZh: '行程', example: 'Our itinerary includes three cities.' },
      { id: 'v114', word: 'souvenir', phonetic: '/ˌsuːvəˈnɪr/', meaning: 'a thing bought to remember a trip', meaningZh: '紀念品', example: 'I bought a souvenir for my friend.' },
    ],
    20: [ // Festivals and Celebrations
      { id: 'v115', word: 'fireworks', phonetic: '/ˈfaɪərwɜːrks/', meaning: 'colourful lights that explode in the sky', meaningZh: '煙花', example: 'We watch fireworks at New Year.' },
      { id: 'v116', word: 'parade', phonetic: '/pəˈreɪd/', meaning: 'a group of people marching together', meaningZh: '遊行', example: 'There was a parade in the street.' },
      { id: 'v117', word: 'decoration', phonetic: '/ˌdekəˈreɪʃən/', meaning: 'things used to make a place look nice', meaningZh: '裝飾', example: 'We put up decorations for Christmas.' },
      { id: 'v118', word: 'costume', phonetic: '/ˈkɒstjuːm/', meaning: 'special clothes for a festival or show', meaningZh: '服裝', example: 'She wore a beautiful costume.' },
      { id: 'v119', word: 'feast', phonetic: '/fiːst/', meaning: 'a large special meal', meaningZh: '盛宴', example: 'We had a feast at Chinese New Year.' },
      { id: 'v120', word: 'custom', phonetic: '/ˈkʌstəm/', meaning: 'a traditional way of doing things', meaningZh: '習俗', example: 'Giving red packets is a custom.' },
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

// ============================================================
// Generate remaining packs (after all helpers are defined)
// ============================================================
const p5Topics = [
  'Healthy Living', 'Travel and Transport', 'The Environment', 'Technology and Inventions',
  'Space and Universe', 'World Cultures', 'Famous People', 'Sports and Competition',
  'Media and Communication', 'Natural Disasters', 'Music and Performance', 'Food Around the World',
  'Ocean and Marine Life', 'Ancient Civilisations', 'Money and Business', 'Art and Design',
  'Friendship and Relationships', 'The Future', 'Adventure and Exploration', 'Life in Hong Kong',
]
const p5Units = p5Topics.map((title, i) => createGenericUnit('p5', i + 1, title, 'P5'))
writePack({ id: 'p5-english-explorer', name: 'English Explorer 5A', publisher: 'Tot & Tat', grade: 'P5', version: '2.0.0', units: p5Units })

const sciTopics = [
  'Plants and Growth', 'Materials and Properties', 'Forces and Movement', 'The Human Body',
  'Light and Shadow', 'Sound and Hearing', 'Electricity', 'Magnets',
  'Water Cycle', 'Food Chains', 'Habitats', 'Earth and Space',
  'Rocks and Soil', 'Air and Weather', 'Simple Machines', 'Energy',
  'Senses', 'Life Cycles', 'Teeth and Digestion', 'Staying Healthy',
]
const sciUnits = sciTopics.map((title, i) => createGenericUnit('sci', i + 1, title, 'Science'))
writePack({ id: 'p3-science-english', name: 'Science in English 3', publisher: 'Tot & Tat', grade: 'P3', version: '2.0.0', units: sciUnits })

const gsTopics = [
  'Our Community', 'Hong Kong Geography', 'Healthy Habits and Safety', 'Chinese Festivals',
  'Transport in Hong Kong', 'Caring for Others', 'Rules and Laws', 'Our Government',
  'Global Connections', 'Protecting the Environment', 'Water and Resources', 'History of Hong Kong',
  'Communication Then and Now', 'Living Together', 'Disaster Preparedness', 'Rights and Responsibilities',
  'Cultural Diversity', 'Maps and Directions', 'Famous Places in HK', 'Being a Good Citizen',
]
const gsUnits = gsTopics.map((title, i) => createGenericUnit('gs', i + 1, title, 'General Studies'))
writePack({ id: 'p3-gs-english', name: 'General Studies in English 3', publisher: 'Tot & Tat', grade: 'P3', version: '2.0.0', units: gsUnits })

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
