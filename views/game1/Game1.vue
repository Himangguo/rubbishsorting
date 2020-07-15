<template>
  <div class="game1">
    <!-- 垃圾桶 -->
    <div class="trash-container">
      <div
        class="trash"
        v-for="(item,index) in trashLists"
        :key="item.id"
        @drop="drop($event, index)"
        @dragover.prevent
      >
        <div class="trash-name">{{item.name}}</div>
        <div class="trash-bag" v-for="(citem,cindex) in item.bag" :key="cindex">{{citem}}</div>
      </div>
    </div>
    <!-- 传送带 -->
    <div class="conveyor-box">
      <div class="conveyor">
        <!-- <img
          class="imgStyle"
          src="~assets/img/home/bgImage.svg"
        />-->

        <transition-group name="drog" tag="div">
          <span
            class="rubbish"
            :style="{left:item.left, top:item.top}"
            draggable="true"
            v-for="(item, index) in lists"
            @dragstart="dragStart($event, index)"
            @dragover="allowDrop"
            :key="item.id"
          >{{item.name}}</span>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trashLists: [
        {
          id: 1,
          name: "可回收垃圾",
          bag: []
        },
        {
          id: 2,
          name: "厨余垃圾",
          bag: []
        },
        {
          id: 3,
          name: "有害垃圾",
          bag: []
        },
        {
          id: 4,
          name: "其他垃圾",
          bag: []
        },
        {
          id: 5,
          name: "干垃圾",
          bag: []
        }
      ],
      lists: [
        {
          id: 1,
          name: "apple",
          left: Math.ceil(Math.random() * 10) * 50 + "px",
          top: Math.ceil(Math.random() * 19) * 10 + "px"
        },
        {
          id: 2,
          name: "banana",
          left: Math.ceil(Math.random() * 10) * 50 + "px",
          top: Math.ceil(Math.random() * 19) * 10 + "px"
        },
        {
          id: 3,
          name: "cat",
          left: Math.ceil(Math.random() * 10) * 50 + "px",
          top: Math.ceil(Math.random() * 19) * 10 + "px"
        },
        {
          id: 4,
          name: "bag",
          left: Math.ceil(Math.random() * 10) * 50 + "px",
          top: Math.ceil(Math.random() * 19) * 10 + "px"
        },
        {
          id: 5,
          name: "pig",
          left: Math.ceil(Math.random() * 10) * 50 + "px",
          top: Math.ceil(Math.random() * 19) * 10 + "px"
        }
      ]
    };
  },
  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },
    dragStart(ev, index) {
      ev.dataTransfer.setData("Text", index);
    },
    drop(ev, index) {
      // 取消默认行为
      this.allowDrop(ev);
      // 被拖拽元素的index
      var dragIndex = ev.dataTransfer.getData("Text");
      this.trashLists[index].bag.push(this.lists[dragIndex].name);
      this.lists.splice(dragIndex, 1);
    }
  }
};
</script>
<style scoped>
.trash-container {
  width: 100vw;
  height: 60vh;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.trash {
  width: 25vw;
  height: 25vh;
  border: 1px solid;
  margin: 10px 4vw;
}
.conveyor-box {
  position: absolute;
  bottom: 43px;
  width: 100vw;
  overflow-x: hidden;
  height: 40vh;
}
.conveyor {
  position: relative;
  margin-top: 7%;
  width: 500vw;
  height: 200px;
  opacity: 0.9;
  background: repeating-linear-gradient(
    80deg,
    #b4b4b4,
    #b4b4b4 10px,
    #a2a2a2 0,
    #a2a2a2 70px
  );
  background-clip: padding-box;
  animation: conveyorMove 5s linear infinite;
}
.conveyor::before {
  content: "";
  width: 100%;
  height: 7px;
  background-color: #6f6f6f;
  position: absolute;
  top: -10px;
  border-top: 10px solid #868686;
}
.conveyor::after {
  content: "";
  width: 100%;
  height: 10px;
  background-color: #868686;
  position: absolute;
  bottom: -10px;
  border-bottom: 10px solid #6f6f6f;
}
.imgStyle {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 20;
  top: 50px;
  left: 200px;
}
.rubbish {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 20px;
  border: 1px solid;
}
@keyframes conveyorMove {
  0% {
    left: 0;
  }
  100% {
    left: -300px;
  }
}
</style>