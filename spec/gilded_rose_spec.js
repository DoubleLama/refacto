import { Shop, Item } from '../src/gilded_rose.js';

describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("Baisser de 1 la qualité et sellIn d'item normaux quand sellIn est positif", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Baisser de 2 la qualité et sellIn de 1 d'item normaux quand sellIn est négatif", function () {
    listItems.push(new Item("+5 Dexterity Vest", 0, 20));
    listItems.push(new Item("Mana Cake", 0, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: -1, quality: 18 },
      { sellIn: -1, quality: 4 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("La qualité des items ne peux pâs être négative", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 0));
    listItems.push(new Item("Conjured Dark Blade", 4, 0));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 0 },
      { sellIn: 3, quality: 0 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(new Item("Aged Brie", 20, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 2 pour Aged Brie et Backstage passes quand sellIn est inférieur à 10", function () {
    listItems.push(new Item("Aged Brie", 10, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 8, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 32 },
      { sellIn: 7, quality: 32 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 3 pour Aged Brie et Backstage passes quand sellIn est inférieur à 5", function () {
    listItems.push(new Item("Aged Brie", 5, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 4, quality: 33 },
      { sellIn: 4, quality: 33 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Avoir une qualité à 0 pour Aged Brie et Backstage passes quand sellIn est négatif", function () {
    listItems.push(new Item("Aged Brie", 0, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: -1, quality: 0 },
      { sellIn: -1, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("La qualité pour Aged Brie et Backstage passes ne peuvent dépasser 50", function () {
    listItems.push(new Item("Aged Brie", 5, 49));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 4, quality: 50 },
      { sellIn: 4, quality: 50 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("La qualité et sellIn de Sulfuras ne bouge jamais", function () {
    listItems.push(new Item("Sulfuras, Hand of Ragnaros", Infinity, 80));
    listItems.push(new Item("Sulfuras, Hand of Ragnaros", 100, 80));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: Infinity, quality: 80 },
      { sellIn: 100, quality: 80 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
  
  it("Baisser de 2 la qualité et sellIn d'item Conjured quand sellIn est positif", function () {
    listItems.push(new Item("Conjured Dark Blade", 18, 41));
    listItems.push(new Item("Conjured Magic Stick", 20, 33));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 17, quality: 39 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
  
  it("Baisser de 4 la qualité et sellIn d'item Conjured quand sellIn est négatif", function () {
    listItems.push(new Item("Conjured Dark Blade", 0, 12));
    listItems.push(new Item("Conjured Magic Stick", -1, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: -1, quality: 8 },
      { sellIn: -2, quality: 2 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});