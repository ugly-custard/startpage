import tree from "../../public/bookmarks.json"
import './tree.css'

const Tree = () => {
  return (
    <div className="flex after:table after:clear-both after:content-['']">

      {Object.entries(tree).map(([treeKey, treeValue]) => (
        <div key={treeKey} className="flex-[50%] p-[5px]">
          <h1 className="inline font-normal text-base text-color-9"> .</h1>
          <ul className="px-4 m-0 list-none">

            {Object.entries(treeValue).map(([categoryKey, categoryValue]) => (
              <li key={categoryKey}>
                <h1 className="inline font-normal text-base text-color-9">{categoryKey}</h1>
                <ul className="pl-6 list-none whitespace-nowrap">

                  {Object.entries(categoryValue).map(([subkey, subvalue]) => {
                    const url = new URL(subvalue)
                    return (
                      <li key={subkey}>
                        <div className="flex items-center">
                          <img
                            src={`https://logo.clearbit.com/${url.hostname}`}
                            className="w-5 h-5 rounded-full mr-1"
                          />
                          <a href={subvalue} className="text-color-6 hover:text-color-12">{subkey}</a>
                        </div>
                      </li>
                    )
                  })}

                </ul>
              </li>
            ))}

          </ul>
        </div>
      ))}

    </div>
  )
}

export default Tree
