function remove_blockquotes(blocks)
  local inside_blockquote = false
  local result = {}

  for _, block in ipairs(blocks) do
    if block.t == "RawBlock" and block.text:match("<article>") then
      inside_blockquote = true
      table.insert(result, pandoc.BlockQuote("Réponse :"))
    end

    if not inside_blockquote then
      table.insert(result, block)
    end

    if inside_blockquote and block.t == "RawBlock" and block.text:match("</article>") then
      inside_blockquote = false
    end
  end

  return result
end

-- Applying the filter to the Pandoc document
-- Le filtre supprime les blocs <article> pour TOUS les formats.
-- Pour générer un corrigé (avec réponses), ne pas utiliser ce filtre.
function Pandoc(doc)
  print(FORMAT)
  doc.blocks = remove_blockquotes(doc.blocks)
  return doc
end
-- Base64 encoding function
local function base64_encode(data)
  local b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  return (data:gsub(".", function(x)
      local r, b = "", string.byte(x)
      for i = 8, 1, -2 do
          r = r .. b64:sub((b >> i) & 0x3F + 1, (b >> i) & 0x3F + 1)
      end
      return r
  end))
end



