let classArr = []
// 今有一空列，名之曰‘classArr’。

function addElement(name, fyinyang) {
    // 今有一术，名之曰：‘addElement’。欲行此术，必先得一言，一数。名之曰：‘name’，名之曰：‘fyinyang’。
    let yinyang = fyinyang;
    // 古之阴阳者，今蛮夷者称其为：‘yinyang’。以‘1’为阳，以‘0’为阴。
    const elementBox = document.querySelector('.elementBox')
    // 今有一殊物，名之曰：‘elementBox’，吾以‘类名’：‘elementBox’于文中取。
    const rlBox = document.createElement('div')
    // 今有一殊物，其本为‘图层’。吾以‘创物之术’为之也，名之曰：‘rlBox’。
    rlBox.className = 'rlBox'
    // ‘rlBox’之‘className’设为‘rlBox’
    const resumeList = document.createElement('div')
    // 今有一殊物，其本为‘图层’。吾以‘创物之术’为之也，名之曰：‘resumeList’。
    resumeList.className = 'resumeList'
    // ‘resumeList’之‘className’设为‘resumeList’。
    resumeList.addEventListener('click', () => {
        // 今吾以‘制动之术’，赋殊物：‘resumeList’：‘点击’之‘回调’。

        open(`res/${name}.html`)
        // 今吾以‘挪移之术’，行‘跳转’之实。

    })
    const rlAvatar = document.createElement('div')
    // 今有一殊物，其本为‘图层’。吾以‘创物之术’为之也，名之曰：‘rlAvatar’。
    rlAvatar.className = 'rlAvatar'
    // 昔‘rlAvatar’之‘类名’，今设为‘rlAvatar’。
    rlAvatar.textContent = name[0]
    // 昔‘rlAvatar’之‘文本内容’，今设为『namme[0]』。
    if (yinyang == 1)
        // 今吾行‘判官之术’，‘yinyang’为阳则为：‘阳之刚者’，为阴则为‘阴之柔者’，以判男女也。
        rlAvatar.style.backgroundColor = '#2979FF'
    // 阳之刚者，男子也。
    else
        rlAvatar.style.backgroundColor = '#FF4081'
    // 阴之柔者，女子也。
    const namep = document.createElement('p')
    // 今有一殊物，其本为‘段落’。吾以‘创物之术’为之也，名之曰：‘namep’。
    namep.className = 'name'
    // 昔‘name’之‘类名’，今设为‘name’。
    namep.textContent = name
    // 昔‘namep’之‘文本内容’，今设为『namme』。
    const icon = document.createElement('p')
    // 今有一殊物，其本为‘段落’。吾以‘创物之术’为之也，名之曰：‘icon’。
    icon.className = 'icon material-symbols-outlined'
    // ‘icon’之‘className’设为‘icon material-symbols-outlined’。
    icon.textContent = 'chevron_right'
    // 昔‘icon’之‘文本内容’，今设为‘chevron_right’。
    elementBox.appendChild(rlBox)
    // 吾以‘填物之术’，将‘rlBox’填于‘elementBox’之中。
    rlBox.appendChild(resumeList)
    // 吾以‘填物之术’，将‘resumeList’填于‘rlBox’之中。
    resumeList.appendChild(rlAvatar)
    // 吾以‘填物之术’，将‘rlAvatar’填于‘resumeList’之中。
    resumeList.appendChild(namep)
    // 吾以‘填物之术’，将‘namep’填于‘resumeList’之中。
    resumeList.appendChild(icon)
    // 吾以‘填物之术’，将‘icon’填于‘resumeList’之中。
}

const url = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6c7ccf42-415a-46f7-829f-18fd4fece44c/f21d4810-18ef-4368-940b-600843276e98.json'
// 今有一言，存‘json’之‘网络地址’也
const promise = fetch(url)
// 今科学之发达，昔‘异步之术’：‘XMLHttpRequest’者淘汰在即，吾以‘promise’替之。此术‘语法’甚简，吾甚欢。
promise.then(res => {

    res.json().then(data => {

        classArr = data
        // 昔空列‘classArr’者，今‘data’者填之。

        console.log(classArr.length)
        // 吾取‘classArr’列之长度，书之。

        classArr.map((value) => {
            // 吾尝观《红宝石》之书，方悟‘哈希之术’。欲行此术，必先得一‘回调之术’资以施行。
            // 欲行此‘回调之术’，必先得一物，世人称其为：‘形参’。吾命此‘形参’名为‘value’，填之，资以施行。

            addElement(value.name, value.yinyang)
            // 今吾行‘addElement’之术，以‘value.name’，‘value.yinyang’二值填之，资以施行。

        })

    })

})



/**
 * 无聊的霜霜 2022.10.29
 * 仅供学习交流
 * 胡扯了一天，好累
 **/