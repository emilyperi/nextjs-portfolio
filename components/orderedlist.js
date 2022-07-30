export default function OrdList(props) {
    const children = props.children;
    const listclass = "list-decimal font-light text-greybrown leading-loose list-inside mt-0";
    
    
    const deepMap = (items, arr, indent) => {
        items.forEach(item => {
            console.log("pushing item onto array", item);
            arr.push(<li key={item.key} className={indent}>{item.content}</li>);
            if (item.sublist) {
                let subarr = [];
                console.log("starting deep copy of sublist", item.sublist);
                const children = deepMap(item.sublist, subarr, "indent-3")
                arr.push(<ol key={item.key + 0.5} className={listclass}>{children}</ol>);
            }
        });
        return arr;
    }
    let myarr = deepMap(props.items, [], "indent-0");
    console.log(Array.isArray(myarr));
    return (
        <ol className={listclass + " mb-4"}>
            {props.items
            ? myarr
            : {children}
            }
        </ol>
    )
}