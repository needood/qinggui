const translations = {
    "ja": {
        "appName": "モーニングクエスチョン",
        "title": "モーニングクエスチョン - 目的のある一日を始めましょう",
        "nav": {
            "features": "機能",
            "about": "概要",
            "coming_soon": "近日公開",
            "contact": "お問い合わせ",
            "privacy": "プライバシーポリシー"
        },
        "hero": {
            "title": "目的のある一日を始めましょう",
            "subtitle": "朝の時間を振り返りと成長の瞬間に変えましょう",
            "cta": "近日公開"
        },
        "features": {
            "title": "主な機能",
            "reflection": {
                "title": "朝の振り返り",
                "desc": "意味のある質問で一日をスタート"
            },
            "tasks": {
                "title": "タスク管理",
                "desc": "日々のタスクを簡単に管理"
            },
            "mood": {
                "title": "感情トラッキング",
                "desc": "感情の変化を記録・可視化"
            },
            "insights": {
                "title": "パーソナルインサイト",
                "desc": "個別化された成長のアドバイス"
            }
        },
        "about": {
            "title": "単なる生産性アプリではありません",
            "description": "モーニングクエスチョンは、タスク管理と感情チェックを組み合わせ、より意識的で生産的なライフスタイルの構築をサポートします。意味のある自己振り返りで一日を始め、感情の旅を追跡し、目標を明確に達成しましょう。"
        },
        "coming_soon": {
            "title": "近日公開予定",
            "features": {
                "analytics": "感情と生産性の相関分析",
                "insights": "回答に基づくパーソナライズされたインサイト",
                "reports": "週次・月次ウェルネスレポート"
            }
        },
        "download": {
            "title": "近日公開",
            "description": "目的を持って一日を始めましょう。モーニングクエスチョンをダウンロードして、朝の振り返りがどのように日常生活を変えるか体験してください。",
            "coming_soon": "近日公開"
        },
        "footer": {
            "rights": "All rights reserved"
        }
    },
    "zh-CN": {
        "appName": "早道",
        "title": "早道 - 每天从目标开始",
        "nav": {
            "features": "功能",
            "about": "关于",
            "coming_soon": "即将上线",
            "contact": "联系我们",
            "privacy": "隐私政策"
        },
        "hero": {
            "title": "每天从目标开始",
            "subtitle": "将您的早晨转化为反思和成长的时刻",
            "cta": "即将上线"
        },
        "features": {
            "title": "主要功能",
            "reflection": {
                "title": "早晨反思提示",
                "desc": "通过有意义的问题开启每一天"
            },
            "tasks": {
                "title": "任务管理",
                "desc": "轻松管理您的日常任务"
            },
            "mood": {
                "title": "情绪追踪",
                "desc": "记录和可视化您的情绪变化"
            },
            "insights": {
                "title": "个人成长洞察",
                "desc": "获取个性化的成长建议"
            }
        },
        "about": {
            "title": "不只是另一个生产力应用",
            "description": "早道将任务管理与情绪检查相结合，帮助您建立更有意识和富有成效的生活方式。通过有意义的自我反思来开始您的一天，追踪您的情感之旅，并清晰地实现您的目标。"
        },
        "coming_soon": {
            "title": "即将推出",
            "features": {
                "analytics": "情绪和生产力相关性分析",
                "insights": "基于您的回答的个性化见解",
                "reports": "每周和每月健康报告"
            }
        },
        "download": {
            "title": "即将上线",
            "description": "开始每一天的目标。下载早道，发现晨间反思如何改变您的日常生活。"
        },
        "footer": {
            "rights": "版权所有"
        }
    },
    "en": {
        "appName": "Morning Questions",
        "title": "Morning Questions - Start Each Day with Purpose",
        "nav": {
            "features": "Features",
            "about": "About",
            "coming_soon": "Coming Soon",
            "contact": "Contact Support",
            "privacy": "Privacy Policy"
        },
        "hero": {
            "title": "Start Each Day with Purpose",
            "subtitle": "Transform your mornings into moments of reflection and growth",
            "cta": "Coming Soon"
        },
        "features": {
            "title": "Key Features",
            "reflection": {
                "title": "Morning Reflection",
                "desc": "Start each day with meaningful questions"
            },
            "tasks": {
                "title": "Task Management",
                "desc": "Effortlessly manage your daily tasks"
            },
            "mood": {
                "title": "Mood Tracking",
                "desc": "Record and visualize your emotional journey"
            },
            "insights": {
                "title": "Personal Growth Insights",
                "desc": "Get personalized growth recommendations"
            }
        },
        "about": {
            "title": "More Than Just Another Productivity App",
            "description": "Morning Questions combines task management with emotional check-ins, helping you build a more mindful and productive lifestyle. Start your day with meaningful self-reflection, track your emotional journey, and accomplish your goals with clarity."
        },
        "coming_soon": {
            "title": "Coming Soon",
            "features": {
                "analytics": "Mood and Productivity Correlation Analysis",
                "insights": "Personalized Insights Based on Your Responses",
                "reports": "Weekly and Monthly Wellness Reports"
            }
        },
        "download": {
            "title": "Coming Soon",
            "description": "Begin each day with purpose. Download Morning Questions and discover how morning reflection can transform your daily life."
        },
        "footer": {
            "rights": "All rights reserved"
        }
    }
};

// 获取当前语言
let currentLang = localStorage.getItem('language') || 'en';

// 更新页面语言
function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value[key];
        }
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });
}

// 切换语言
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', currentLang);
    updateLanguage(currentLang);
}

// 初始化语言
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});