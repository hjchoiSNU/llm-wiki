// Tokenizer for the FlexSearch index (applied to page text and to the query alike).
//
// - Anything that is not a letter or digit (brackets, quotes, commas, slashes…) ends a word,
//   so "(Molina 2026)" is indexed as "molina" and "2026".
// - Hangul is matched by word, not by single syllable. Each run of Hangul is indexed with all
//   of its suffixes; with "forward" tokenization any part of a word written without spaces
//   then matches ("예측오차" inside "보상예측오차", "도파민" inside "도파민의").
// - Kana and CJK ideographs stay one token per character.

const isHangul = (code: number) =>
  (code >= 0xac00 && code <= 0xd7af) || // syllables
  (code >= 0x1100 && code <= 0x11ff) || // jamo
  (code >= 0x3130 && code <= 0x318f) // compatibility jamo

const isSingleCharCJK = (code: number) =>
  (code >= 0x3040 && code <= 0x309f) ||
  (code >= 0x30a0 && code <= 0x30ff) ||
  (code >= 0x4e00 && code <= 0x9fff) ||
  (code >= 0x20000 && code <= 0x2a6df)

const wordChar = /[\p{L}\p{N}\p{M}]/u

export const encoder = (str: string): string[] => {
  const tokens: string[] = []
  let word = ""
  let hangul = false

  const flush = () => {
    if (word === "") return
    if (hangul) {
      // every Hangul code point above is in the BMP, so string indices are characters
      for (let i = 0; i < word.length; i++) tokens.push(word.slice(i))
    } else {
      tokens.push(word)
    }
    word = ""
  }

  for (const char of str.toLowerCase()) {
    const code = char.codePointAt(0)!
    if (isSingleCharCJK(code)) {
      flush()
      tokens.push(char)
    } else if (isHangul(code)) {
      if (!hangul) flush()
      hangul = true
      word += char
    } else if (wordChar.test(char)) {
      if (hangul) flush()
      hangul = false
      word += char
    } else {
      flush()
    }
  }
  flush()

  return tokens
}
