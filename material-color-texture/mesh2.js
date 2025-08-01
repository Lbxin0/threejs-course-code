/**
 * 导入 Three.js 库的所有模块，将其挂载到 THREE 命名空间下，
 * 后续可通过该命名空间访问 Three.js 提供的各种类和方法。
 */
import * as THREE from 'three';

/**
 * 创建一个平面几何体对象。
 * @param {number} 100 - 平面在 X 轴方向的宽度。
 * @param {number} 100 - 平面在 Y 轴方向的高度。
 */
const geometry = new THREE.PlaneGeometry(100, 100);

/**
 * 创建一个基础网格材质对象。
 * 该材质用于定义网格的外观。
 * @param {Object} options - 材质配置选项。
 * @param {THREE.Color} options.color - 网格的颜色，设置为橙色。
 * @param {boolean} options.transparent - 是否开启透明效果，设置为 true 表示开启。
 * @param {number} options.opacity - 透明度，取值范围 0（完全透明）到 1（完全不透明），此处设置为 0.5。
 */
const material = new THREE.MeshBasicMaterial(({
    color: new THREE.Color('orange'),
    transparent: true,
    opacity: 0.5,
}));

/**
 * 创建一个网格对象，将几何体和材质组合在一起。
 * 通过该网格对象，可将定义好的平面几何体以指定的材质在 Three.js 场景中渲染出来。
 * @param {THREE.BufferGeometry} geometry - 几何体对象。
 * @param {THREE.Material} material - 材质对象。
 */
const mesh = new THREE.Mesh(geometry, material);

/**
 * 将创建好的网格对象打印到控制台，方便调试查看其属性和结构。
 */
console.log(mesh);

/**
 * 以下代码为注释示例，展示如何获取和修改网格材质的颜色。
 */
// 获取网格材质的颜色对象
// const color = mesh.material.color;
// 打印颜色的十六进制字符串表示
// console.log(color.getHexString());
// 打印颜色的 CSS 样式字符串表示
// console.log(color.getStyle());
// 将颜色设置为蓝色
// color.setStyle('blue');

/**
 * 导出创建好的网格对象，供其他模块引入使用。
 */
export default mesh;
