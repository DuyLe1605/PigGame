# Pig Game

## Giới thiệu (Introduction)

Pig Game là một trò chơi xúc xắc dành cho hai người chơi. Mục tiêu của trò chơi là đạt được số điểm cao nhất bằng cách lăn xúc xắc và tích lũy điểm. Nếu lăn được số 1, người chơi sẽ mất tất cả điểm hiện tại và phải chuyển lượt cho người chơi khác.

Pig Game is a two-player dice game. The goal is to reach the highest score by rolling the dice and accumulating points. However, if a player rolls a 1, they lose all their current points and must pass the turn to the other player.

## Luật chơi (Game Rules)

1. **Bắt đầu trò chơi / Start the Game:**

   - Mỗi người chơi có điểm tổng ban đầu là 0.
   - Mỗi lượt chơi có một điểm tạm thời.

   Each player starts with a total score of 0. Each turn, they accumulate temporary points.

2. **Lăn xúc xắc (Roll Dice 🎲):**

   - Khi nhấn "Roll Dice", một số ngẫu nhiên từ 1 đến 6 xuất hiện.
   - Nếu số 1 xuất hiện, người chơi mất điểm tạm thời và lượt chơi chuyển sang người chơi khác.
   - Nếu số khác 1, điểm số sẽ được cộng vào điểm tạm thời.

   When clicking "Roll Dice," a random number from 1 to 6 appears.

   - If a 1 appears, the player loses their temporary points and the turn switches.
   - If any other number appears, it is added to the temporary score.

3. **Giữ điểm (Hold 📥):**

   - Người chơi có thể nhấn "Hold" để cộng điểm tạm thời vào tổng điểm của mình.
   - Sau khi giữ điểm, lượt chơi sẽ tự động chuyển sang người chơi tiếp theo.

   Players can press "Hold" to add their temporary points to their total score.

   - After holding, the turn automatically switches to the next player.

4. **Thắng cuộc (Winning Condition):**

   - Người chơi nào đạt tổng điểm từ 50 trở lên trước sẽ thắng.
   - Khi thắng, màn hình hiển thị "Player X Win".

   The first player to reach a total score of 50 or more wins.

   - The screen will display "Player X Win" when a player wins.

5. **Bắt đầu lại (New Game 🔄):**

   - Nhấn "New Game" để đặt lại điểm số và bắt đầu lại từ đầu.

   Press "New Game" to reset all scores and restart the game.

## Cách hoạt động (How It Works)

- **Lăn xúc xắc** để tạo số ngẫu nhiên và hiển thị kết quả.
- **Chuyển lượt chơi** khi người chơi lăn được số 1 hoặc nhấn "Hold".
- **Kiểm tra điều kiện thắng** khi tổng điểm đạt 50.
- **Bắt đầu lại** khi người chơi nhấn "New Game".

- **Rolling the dice** generates a random number and displays the result.
- **Switching turns** when a player rolls a 1 or presses "Hold."
- **Checking the win condition** when a player's total score reaches 50.
- **Restarting the game** when "New Game" is pressed.

## Cải tiến đề xuất (Suggested Improvements)

- **Cho phép người chơi đặt điểm thắng** thay vì mặc định 50.
- **Thêm hiệu ứng động** khi xúc xắc được lăn.
- **Thêm âm thanh** khi người chơi thắng hoặc mất lượt.
- **Hỗ trợ nhiều người chơi hơn** bằng cách mở rộng logic.

- **Allow players to set a custom winning score** instead of a fixed 50.
- **Add animations** for rolling the dice.
- **Include sound effects** when a player wins or loses a turn.
- **Support more players** by extending the game logic.

## Công nghệ sử dụng (Technologies Used)

- **HTML**: Giao diện người dùng.
- **CSS**: Thiết kế giao diện.
- **JavaScript**: Điều khiển logic trò chơi.

- **HTML**: User interface.
- **CSS**: Styling.
- **JavaScript**: Game logic handling.

## Cách chạy trò chơi (How to Run the Game)

1. Clone repository về máy:
   ```bash
   git clone https://github.com/your-username/pig-game.git
   ```
2. Mở file `index.html` trên trình duyệt.

3. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pig-game.git
   ```
4. Open `index.html` in a browser.

Hoặc bạn có thể chơi trực tiếp bằng cách nhấn vào link trong phần mô tả của repository trên GitHub.

Or you can play directly by clicking the link in the description section of the GitHub repository.

---

**Chúc bạn chơi vui vẻ! / Have fun playing! 🎲**
