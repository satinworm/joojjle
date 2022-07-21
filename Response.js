export default {
   kind: "customsearch#search",
   url: {
      type: "application/json",
      template:
         "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
   },
   queries: {
      request: [
         {
            title: "Google Custom Search - jaskjsak",
            searchTerms: "jaskjsak",
            count: 10,
            startIndex: 1,
            inputEncoding: "utf8",
            outputEncoding: "utf8",
            safe: "off",
            cx: "55091a8f686b793c8",
         },
      ],
   },
   searchInformation: {
      searchTime: 0.320964,
      formattedSearchTime: "0.32",
      totalResults: "0",
      formattedTotalResults: "0",
   },
   spelling: {
      correctedQuery: "jassak",
      htmlCorrectedQuery: "<b><i>jassak</i></b>",
   },
};
