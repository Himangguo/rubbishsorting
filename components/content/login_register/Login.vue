<template>
  <div>
    <div class="hide"></div>
    <div class="login-container">
      <div class="panfish">
        <img :src="imgUrl" class="nomal" />
      </div>
      <h3 class="title">用户登录</h3>
      <router-link to="/">
        <i class="close">x</i>
      </router-link>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="account"
            v-model="account"
            @focus="changeImg2"
            @blur="changeImg1"
            placeholder="请输入账号"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            name="password"
            v-model="password"
            @focus="changeImg3"
            @blur="changeImg1"
            placeholder="请输入密码"
          />
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">登录</button>
      </form>
      <div class="foot_inf">
        <div class="foot_register">
          <span>没有账号？</span>
          <router-link to="/register" class="register">注册</router-link>
        </div>
        <div>第三方登录</div>
        <div class="img_svg">
          <div class="svg_box" v-for="(item,i) in svgUrl" v-bind:key="i">
            <img :src="item" class="svg_style" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      account: "",
      password: "",
      imgUrl: "https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png",
      img: [
        "https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png",
        "https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png",
        "https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png"
      ],
      svgUrl: [
        "https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg",
        "https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg",
        "https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
      ]
    };
  },
  methods: {
    changeImg1() {
      this.imgUrl = this.img[0];
    },
    changeImg2() {
      this.imgUrl = this.img[1];
    },
    changeImg3() {
      this.imgUrl = this.img[2];
    }
  }
};
</script>
<style >
.hide {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1024;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.5;
}
.close {
  position: absolute;
  right: 10px;
  top: 2px;
  cursor: pointer;
  display: inline-block;
  font-family: "Ionicons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
}
.login-container {
  position: relative;
  z-index: 2048;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  font-size: 15px;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.foot_inf {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #767676;
}
.foot_register,
.img_svg {
  display: flex;
  flex-direction: row;
}
.img_svg{
  width: 100%;
  justify-content: center;
}
.register {
  color: #007fff;
  cursor: pointer;
}
.svg_style {
  width: 30px;
  height: 30px;
}
.svg_box {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

.panfish {
  position: absolute;
  top: 0;
  left: 50%;
  width: 8.6rem;
  transform: translate(-50%, -75%);
  z-index: 1;
}
</style>
