// components/parts/slider/detail.js

import React, { useState, useContext } from 'react';
import { SplideSlide } from "@splidejs/react-splide";
import LocaleContext from '../../context/localeContext.js';
import ImageOptimizer from '../../download/ImageOptimizer.js'; // ★ ImageOptimizer をインポート

export default function SliderDetail({post}) {
    const { locale } = useContext(LocaleContext);
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // ★ cardStyle から backgroundImage を削除し、minHeightのみ残す
    const cardStyle = {
        minHeight: '360px',
        // backgroundSize, backgroundPosition は ImageOptimizer の objectFit と className で制御するため削除
        // opacity, transition も ImageOptimizer の className に移動
    };

    const labelStyle = {
        backgroundColor: '#FFFFFF80',
        opacity: isHovered ? 0.8 : 0,
        transition: 'opacity 0.3s ease'
    };

    const label = locale === "ja" ? post.label : post.label_en; 

    // Notionのプロパティから取得した最適化済み画像データを参照
    // post.image に optimizedImage プロパティが追加されていることを想定します
    // pages/index.js の fetchData 関数でこの加工が行われます
    const imageData = post.image;

    // 画像データが不足している場合のフォールバック（レンダリングしないか、代替表示）
    if (!imageData || !imageData.baseName || !imageData.pagePath) {
        console.warn(`[SliderDetail] Missing image data for post: ${post.title || post.id}`);
        // 例えば、空のSplideSlideを返すか、エラー表示を検討
        return <SplideSlide key={post.id || Math.random()}><div style={cardStyle}>No Image</div></SplideSlide>; 
    }

    return (
        <SplideSlide key={post.id || post.title}> {/* keyプロパティは一意なID推奨 */}
            <div
                className="card relative rounded-lg overflow-hidden" // ★ 親要素に `position: relative;` を設定する必要がある（ImageOptimizerのfillが機能するため）
                style={cardStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* ★ ImageOptimizer を背景画像のように配置 */}
                <ImageOptimizer
                    baseName={imageData.baseName}
                    pagePath={imageData.pagePath}
                    alt={imageData.alt}
                    responsive={true}      // レスポンシブ対応を有効化
                    responsiveType="hero"  // ヒーローセクション用最適化
                    objectFit="cover"     // カバー表示
                    className={`absolute inset-0 rounded-lg ${isHovered ? 'opacity-90' : 'opacity-100'} transition-opacity duration-300`}
                    priority={true}       // LCP最適化のため優先読み込み
                    placeholder="blur"    // ブラープレースホルダー
                    loading="eager"       // 即座に読み込み
                />
                <div className="p-3 absolute bottom-0 left-0 w-full z-10" style={labelStyle} > {/* ★ z-indexでラベルを手前に表示 */}
                    <h5 className="text-[#333333]">{label}</h5>
                </div>
            </div>
        </SplideSlide>
    );
}