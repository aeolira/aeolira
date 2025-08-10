// src/utils/lunar.js
/**
 * 简单农历日期格式化函数
 * 注意：这是一个简化版的农历转换，真实农历计算非常复杂
 * 在实际应用中，您可能需要集成一个专业的农历库
 */
export function formatLunarDate(solarDate) {
  // 简化版的农历转换 - 仅用于演示
  const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', 
                      '七月', '八月', '九月', '十月', '冬月', '腊月'];
  const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', 
                    '初八', '初九', '初十', '十一', '十二', '十三', '十四', 
                    '十五', '十六', '十七', '十八', '十九', '二十', '廿一', 
                    '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', 
                    '廿九', '三十'];
  
  const date = new Date(solarDate);
  const month = date.getMonth();
  const day = date.getDate();
  
  // 这是一个简化的农历日期计算
  // 在实际应用中，您应该使用专业的农历计算库
  const lunarMonth = lunarMonths[month % 12];
  const lunarDay = lunarDays[(day - 1) % 30];
  
  return `${lunarMonth}${lunarDay}`;
}

/**
 * 计算农历生日对应的公历日期
 */
export function getLunarBirthday(lunarBirthday, year) {
  // 在实际应用中，这里应该使用专业的农历转换库
  // 这里仅返回一个示例日期
  return `${year}-08-15`;
}