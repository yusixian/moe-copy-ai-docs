import { source } from "@/lib/source"
import { createFromSource } from "fumadocs-core/search/server"
import { createTokenizer } from "@orama/tokenizers/mandarin"

export const { GET } = createFromSource(source, {
  components: {
    tokenizer: createTokenizer()
  },
  // 调整搜索参数以优化中文搜索
  search: {
    threshold: 0,
    tolerance: 0
  }
})
