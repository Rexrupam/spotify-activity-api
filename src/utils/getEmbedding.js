
// I generate the embedding manually. But this should not be done in real life application. We need to use Openai api 
// or tensorflow.

const getEmbedding = ()=>{
  return Array.from({ length: 1536 }, () => Math.random() * 2 - 1);
}

export default getEmbedding;