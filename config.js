// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "可爱的小朋友",  // 同上...
        "今天是你的生日",
        "在这个美好的日子里",
        "因为你这世界缤纷美丽",
        "愿热情的你永远青春",
        "真情的你永远开心",
        "纯情的你永远快乐",
        "深情的你永远甜蜜",
        "痴情的你永远幸福",
        "你的过去我不曾参与",
        "但你的未来我奉陪到底",
        "！！！生日快乐 ！！！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "可爱的小朋友": "./imgs/001.png",
        "今天是你的生日": "./imgs/012.png",
        "在这个美好的日子里": "./imgs/013.png",
        "因为你这世界缤纷美丽": "./imgs/004.png",
        "愿热情的你永远青春": "./imgs/005.png",
        "真情的你永远开心": "./imgs/006.png",
        "纯情的你永远快乐": "./imgs/007.png",
        "深情的你永远甜蜜": "./imgs/008.png",
        "痴情的你永远幸福": "./imgs/009.png",
        "你的过去我不曾参与": "./imgs/010.png",
        "但你的未来我奉陪到底": "./imgs/011.png",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "准备好了么？那么开始吧",
        play: "先来点音乐。。。",
        bannar_coming: "！！生日快乐！！",
        balloons_flying: "好像少点什么？？",
        cake_fadein: "蛋糕？？？",
        light_candle: "来，许个愿吧。。。",
        wish_message: "吹蜡烛？还有什么？",
        story: "A MESSAGE FOR YOU",
    }
};
