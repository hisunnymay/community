# Value Recommendation
帮助你的 end-user 快速锁定心仪内容，了解业务范围或边界；
Preferred, but not required。


## Overview 

使用 Value Recommendation （简称 Value Rec，下同）参数值推荐，可以为你的 end-user 提供业务部分或全部推荐选项，使 end-user 快速了解业务范围，并可以根据自己的偏好，做出特定场景下的最优选择。

如，当 end-user 想喝冷萃，但此刻冷萃已经售罄，只有冰拿铁可以提供，通过 Value Rec，end-user 可以迅速了解门店供货现状，并快速决定继续购买还是结束对话。

### 1. Value Rec Features
  1. 支持翻页功能，如：next page、previous page；
  2. 支持通过 order 选择，或通过 name 选择；
  3. 支持推荐选项 name 的完整理解及指代理解；see more about DU click here （待补充 DU doc）
  4. 支持 end-user 选择超出业务限定范围后的默认表现；
  5. 支持 single entry 与 zero entry 特殊情况的默认表现；
  6. 支持客制化默认表现。

### 2. 需要一起使用的
  1. Prompt：Value Rec 总是会同 Prompt 一起出现，所以在定义 Value Rec 之前，记得一定要先加上 Prompt 。你可以这样理解，当你为你的 end-user 展示推荐选项时，你不可能只告诉他选项有什么，你总是会先告诉他这个选择的目的是什么。就好比，同样是选择影片，在 IMAX 电影院看、在汽车电影院看、还是看午夜场，不同场景下的选择可能是完全不同的。
  2. Function：Value Rec 总是需要 Function 的支持，才能开始行动起来。你需要把你所有想向 end-user 展示的内容通过 function 来实现。Function 的实现可以通过以下两种方式进行：
    1. Native Function：use kotlin code； 
    2. Service / Provider：use Postgres；
使用哪一种方式，最终取决于你的数据是如何储存的。如果你使用 Framely Hosting 方案，那么通过常用的 SQL 语句即可实现各种 function。 
  3. Intent
    1. （还没有用过待补充）

### 3. 推荐一起使用的
  1. Value Check，用以校验 end-user 的选择是否满足业务范围，若不满足可以使用 Value Check 默认表现提示 end-user，允许 end-user 修改已选内容或重选内容，或根据业务场景客制化默认表现，see more click here （待补充 Value Check）；
  2. Confirmation，用以与 end-user 确认想要选择的内容是否与 chatbot 得到的内容一致，若不一致，可以使用 Confirmation 默认表现追问 end-user 下一步指示，或客制化默认表现，see more click here （待补充 Confirmation）。


## How to use
First click agent link: what_to_watch, and clone it to your own org. 
Then you can commit, test or change, commit and test.


一些 Dialog Annotation 既存在于 Slot Level，也存在于 Frame Level，不过你不用担心，无论在哪个 Level 定义，在这里暂时不会影响你理解如何定义 Value Rec。因为每一个 Level 的定义方式都是一致的，不同的只是这个 Dialog Annotation 所能影响的范围，是只影响 Slot，还是会波及整个 Frame。




## Concept

👇 在你开始前，一定要了解的一些概念：


### Input

#### 1. Source Type

Source 即推荐列表来源，当你为你的 end-user 推荐一组内容时，这些内容一定是有一个来源的，即你需要告诉 chatbot 为 end-user 展示的列表内容应当从哪里获取。显然，不同的 slot 推荐的内容是不同，source 理应也是不同的。

比如，电影场景中，影院、影片、导演、演员一定是来自数据库数据表中的不同 column，或者是平台上定义的不同 entity，当然他们之间可以有一定关联性也可以完全没有，取决于你的业务逻辑。当然，无论多么复杂的逻辑，Framely 都可以承载，只需要你定义好相关的 function 实现即可。

而在 Value Rec 这里，你其实无需关心复杂的逻辑，只需要在 Source Type 处关联好 source 即可。Source 可以通过 Function 与 Intent 来实现调用：

##### 1. Function

若 Source Type 选择 Code Expression，则表示你将通过 kotlin code 调用 function，调用 function 的 code 非常简单，输入你要调用的 function label 即可，记得要加上 ()：
function()
function(input: slot!!)  // 如需传参


如果你想直接调用已经定义好的 entity 的 instance，那么可以遵循以下规则：
// agent 内部调用 function
getAllInstances() // hosting type level
Type!!.getAllInstances() // type level
slot!!.getAllInstances() // slot level

// 跨 org/agent 需要添加 fully qualified name
org.chatbot.slot!!.getAllInstances()


不过不用担心，Framely 内部已在所有涉及纯 raw code 的输入框中，都内置了相对应的 auto completion，包括 SQL、kotlin、json，无论是你自定义的 type label 或 slot label 还是 language sytax 都可以 auto completion，就使用 IDE 一样。See more about Code Expression，click here （待补充 Code Expression ）


##### 2. Intent
（待补充）


### Outputs：

#### 2. Display

Display 是 Value Rec 向 end-user 展示推荐内容的主体，包括：
- Header、Body、Footer：负责展示内容的部分；
- Number of entries：负责单页条目数量的部分，默认值为 5，你可以修改成任意你想要的范围，但数值不宜过大，可以想象一下你最终部署的终端长度，符合你的范围即可；
- Delimiter：负责每个条目间、条目末的定界符，其中条目间默认为“\n”，即每一个条目换行显示，如果你不想用换行，可以更换成任意想要的符号；
- Template：负责终端样式展示的，see more about template click here：Generic Message Json Format 及样式 。
通过 Try-It-Now 打印出一个基础的 Display，样式如下图所示👇


如果默认值的表现可以满足你的应用场景，那么 Display 对你而言，只需关注并定义 3 部分内容；如果只关注必需区域的话，你就只需关注 Body 了：
- Header（非必需）：text area，定义推荐卡片的标题内容，如：“Top picks for you: ”、“Recommended for you: ”等；
- Body（必需）：text with code expression embedded，定义推荐内容主体，body 循环体的引用许遵守以下规则：
// index
${it.index + 1}  // index start with 0, so should '+1';

// Entity type
${it.value.name()}  // on platform, expressions[0] stand for normalized
${it.value.identifier()}  // on platform, entity instance label

// Frame type
${it!!.value}

- Footer（非必需）：text area，定义推荐卡片的底部内容或提示，如：“You can tell me the order or the name.”等；
理论上，Header、Footer 你可以定义成任意你想呈现的内容，但如果你有准备去复用 Value Rec，那么从话术角度，你可以定义得更通用一些：
- 如下图所示👇：

- 效果展示👇：

但事事总有例外。总会有那么个场景，你的 end-user 遇到可选内容有且仅有一个或没有的时候，如果没有特殊的需求，大可以放心的使用 Single-entry Prompts 和 Zero-entry Prompts  的默认表现，来处理这两个特殊场景。


#### 3. Single-entry Prompts


当 Value Rec 为 end-user 推荐内容有且只有一条时，你可以通过 Single-entry Prompts 成功引起 end-user 的注意。当 end-user 可选的内容有且只有一个时，如果 end-user 选择则可以顺利完成服务，如果 end-user 不选择则无法完成任务。因此针对不同场景，你可以为 end-user 提供不同的 Single-entry Prompts 提示：
- Implicit：隐式提示。如果你的目的是想帮助 end-user 成功完成任务，那么隐式提示是你的最佳选择。选择后，当遇到条目为一的场景时，chatbot 会自动为  end-user 进行选择，并通过隐式提示的方式告知 end-user。
- Explicit：显式提示。如果你并不确定 end-user 的预期，或者对 end-user 是否完成任务没有迫切需求，那么你可以使用显式提示的方式。显式提示下，chatbot 并不会主动为 end-user 进行选择，而是会以确认的方式询问他，end-user 可以确认选项，也可以放弃选项。放弃选项后便会进入 Zero-entry Prompts 的状态。 
 // VR SEP 引用条目
${it.name()}


Tips：Implicit 隐式提示，end-user 无法拒绝选项，选择后会进入下一个业务流程。



#### 4. Zero-entry Prompts

当 Value Rec 为 end-user 推荐内容刚好为空、或因为一些原因（如拒绝 Single-entry Prompts 的 explicit 追问）走到这里时，chatbot 会陷入困境。而拯救 chatbot 的最简单方法，就是定义好 Zero-entry Prompts 的提示语句，这样当再次遇到类似场景时，chatbot 会开始执行默认表现，并退出当前 intent，这样你的 end-user 和 chatbot 都不会大惊失措，他们可以携手重新开始。

当然，如果 Zero-entry Prompts 的默认表现不能满足你的业务需求，或者你不希望你的 end-user 和 chatbot 携手走入这一步，别担心，你完全可以在不想发生这样状态的 slot 的前一个 slot 设置与之相应的 Value Check，就像使用“挽尊卡”一样，把对话及时挽救回来，给予 end-user 和 chatbot 更新鲜的体验。See more about Value Check click here （待补充 Value Check）

- 如下图所示👇：
🤦‍♀️ 竟然没 work。。。


#### 5. Hard Toggle

Hard 是用来声明“业务范围”与“推荐列表”之间关系的：
- 若开关开启，则表“强限制”，即你的“业务范围”与 Value Rec 的推荐列表内容严丝合缝、完全吻合。因此若 end-user 想要的内容不在当前列表，chatbot 会给 end-user 一个超出范围的默认回复，当然你可以客制化这个回复，或者添加更多的默认回复。
- 若开关关闭，则表示无限制，即 Value Rec 的推荐列表内容起到展示或提示的作用，与你的“业务范围”无关，当你的 end-user 想要的内容不在当前列表，他也可以得到他想要的。

通常涉及库存或 slot 之间有各种关联及限制的场景下，我们建议使用 Hard 模式，比如不同的电影院放映的电影是不同的，Hard 模式可以帮助你的 end-user 了解放映或排片情况，而不致于每次超出选择范围、每次都得不到想要的。

- 如下图所示👇：


当然，有一点你无需担心。如果你的推荐列表有 20 个条目，即使每页只展示 5 个，除了进行翻页操作外，你的 end-user 一样可以直接表达目前没有展示出来的 15 个条目中的任意一个。

- 如下图所示👇：
🤦‍♀️ 竟然不 work 了。。。



End-user Input：

#### 6. Expressions

🤦‍♀️ 这个得测一下
see more about DU click here （待补充 DU doc）
