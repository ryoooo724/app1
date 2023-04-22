package com.example.demo;

import java.util.Random;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class fortune {
	@CrossOrigin(origins = "http://localhost:3000") // 許可するオリジンを指定
    // 今日の運勢を取得するAPIエンドポイント
    @GetMapping("/api/fortune")
    public ResponseEntity<String> getFortune() {
        // ここで運勢を生成する処理を実行する
        String fortune = generateFortune(); // 運勢を生成するメソッドを仮定

        // JSON形式で運勢をレスポンスとして返す
        return ResponseEntity.ok("{\"fortune\": \"" + fortune + "\"}");
    }

    // 運勢を生成するメソッド
    private String generateFortune() {
        // ここで運勢を生成するロジックを実装する
        // 例えば、ランダムな運勢を選択して返すなどの処理を行う
        String[] fortunes = { "大吉", "中吉", "小吉", "末吉", "凶" };
        int index = new Random().nextInt(fortunes.length);
        return fortunes[index];
    }
}
