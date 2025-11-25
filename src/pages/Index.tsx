import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const matches = [
    {
      id: 1,
      team1: { name: 'Virtus.pro', logo: '🐻', players: 5 },
      team2: { name: 'Natus Vincere', logo: '⭐', players: 5 },
      map: 'Dust II',
      prize: 5000,
      betPool: 12500,
      status: 'live',
      time: '2/3 maps',
    },
    {
      id: 2,
      team1: { name: 'Team Spirit', logo: '👻', players: 5 },
      team2: { name: 'Cloud9', logo: '☁️', players: 5 },
      map: 'Mirage',
      prize: 3000,
      betPool: 8200,
      status: 'starting',
      time: '15 мин',
    },
    {
      id: 3,
      team1: { name: 'FaZe Clan', logo: '🔥', players: 5 },
      team2: { name: 'G2 Esports', logo: '⚡', players: 5 },
      map: 'Inferno',
      prize: 7500,
      betPool: 18900,
      status: 'upcoming',
      time: '1 час',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 's1mple', avatar: '👑', wins: 342, balance: 45820, winRate: 78 },
    { rank: 2, name: 'ZywOo', avatar: '🎯', wins: 318, balance: 42150, winRate: 76 },
    { rank: 3, name: 'NiKo', avatar: '💎', wins: 295, balance: 38900, winRate: 74 },
    { rank: 4, name: 'device', avatar: '🛡️', wins: 287, balance: 36200, winRate: 72 },
    { rank: 5, name: 'electronic', avatar: '⚔️', wins: 276, balance: 34500, winRate: 71 },
  ];

  const skins = [
    { id: 1, name: 'AK-47 | Redline', price: 2500, rarity: 'Легендарное', image: '🔴', available: true },
    { id: 2, name: 'AWP | Dragon Lore', price: 12000, rarity: 'Тайное', image: '🐉', available: true },
    { id: 3, name: 'M4A4 | Howl', price: 8500, rarity: 'Запрещённое', image: '🐺', available: false },
    { id: 4, name: 'Karambit | Fade', price: 15000, rarity: 'Тайное', image: '🗡️', available: true },
    { id: 5, name: 'Glock-18 | Fade', price: 3200, rarity: 'Секретное', image: '🌈', available: true },
    { id: 6, name: 'Desert Eagle | Blaze', price: 1800, rarity: 'Редкое', image: '🔥', available: true },
  ];

  const userProfile = {
    name: 'ProGamer_2024',
    avatar: '🎮',
    level: 42,
    balance: 8750,
    wins: 156,
    losses: 68,
    winRate: 69,
    totalEarned: 24300,
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎮</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CS2 Arena
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`transition-colors ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveTab('matches')}
                className={`transition-colors ${activeTab === 'matches' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Играть
              </button>
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`transition-colors ${activeTab === 'leaderboard' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Рейтинг
              </button>
              <button
                onClick={() => setActiveTab('shop')}
                className={`transition-colors ${activeTab === 'shop' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Магазин
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`transition-colors ${activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Профиль
              </button>
            </nav>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Icon name="Wallet" size={20} className="text-secondary" />
                <span className="font-semibold">{userProfile.balance.toLocaleString()} ₽</span>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="Plus" size={16} className="mr-1" />
                Пополнить
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:scale-105 transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Активных матчей</p>
                    <h3 className="text-3xl font-bold mt-1">24</h3>
                  </div>
                  <div className="text-4xl">🎯</div>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30 hover:scale-105 transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Игроков онлайн</p>
                    <h3 className="text-3xl font-bold mt-1">3,847</h3>
                  </div>
                  <div className="text-4xl">👥</div>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:scale-105 transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Призовой фонд</p>
                    <h3 className="text-3xl font-bold mt-1">2.4M ₽</h3>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
              </Card>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Активные матчи</h2>
                <Button variant="outline" onClick={() => setActiveTab('matches')}>
                  Все матчи
                  <Icon name="ChevronRight" size={16} className="ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {matches.slice(0, 2).map((match) => (
                  <Card key={match.id} className="p-6 hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant={match.status === 'live' ? 'default' : 'secondary'}
                        className={match.status === 'live' ? 'bg-red-500 animate-pulse' : ''}
                      >
                        {match.status === 'live' ? '🔴 В эфире' : match.status === 'starting' ? '⏱️ Начинается' : '📅 Скоро'}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{match.time}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{match.team1.logo}</div>
                        <p className="font-semibold">{match.team1.name}</p>
                        <p className="text-sm text-muted-foreground">{match.team1.players} игроков</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-muted-foreground mb-2">VS</div>
                        <Badge variant="outline" className="text-xs">{match.map}</Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-2">{match.team2.logo}</div>
                        <p className="font-semibold">{match.team2.name}</p>
                        <p className="text-sm text-muted-foreground">{match.team2.players} игроков</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Призовой фонд</p>
                        <p className="font-bold text-lg text-primary">{match.prize.toLocaleString()} ₽</p>
                      </div>
                      <div className="space-y-1 text-right">
                        <p className="text-sm text-muted-foreground">Пул ставок</p>
                        <p className="font-bold text-lg text-secondary">{match.betPool.toLocaleString()} ₽</p>
                      </div>
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        <Icon name="Zap" size={16} className="mr-2" />
                        Сделать ставку
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'matches' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold mb-6">Все турниры</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="live">В эфире</TabsTrigger>
                <TabsTrigger value="upcoming">Скоро</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                {matches.map((match) => (
                  <Card key={match.id} className="p-6 hover:border-primary transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant={match.status === 'live' ? 'default' : 'secondary'}
                        className={match.status === 'live' ? 'bg-red-500 animate-pulse' : ''}
                      >
                        {match.status === 'live' ? '🔴 В эфире' : match.status === 'starting' ? '⏱️ Начинается' : '📅 Скоро'}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{match.time}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{match.team1.logo}</div>
                        <p className="font-semibold">{match.team1.name}</p>
                        <p className="text-sm text-muted-foreground">{match.team1.players} игроков</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-muted-foreground mb-2">VS</div>
                        <Badge variant="outline" className="text-xs">{match.map}</Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl mb-2">{match.team2.logo}</div>
                        <p className="font-semibold">{match.team2.name}</p>
                        <p className="text-sm text-muted-foreground">{match.team2.players} игроков</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Призовой фонд</p>
                        <p className="font-bold text-lg text-primary">{match.prize.toLocaleString()} ₽</p>
                      </div>
                      <div className="space-y-1 text-right">
                        <p className="text-sm text-muted-foreground">Пул ставок</p>
                        <p className="font-bold text-lg text-secondary">{match.betPool.toLocaleString()} ₽</p>
                      </div>
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        <Icon name="Zap" size={16} className="mr-2" />
                        Сделать ставку
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold mb-6">Топ игроков</h2>
            <div className="space-y-3">
              {leaderboard.map((player) => (
                <Card
                  key={player.rank}
                  className={`p-6 transition-all hover:scale-[1.02] ${
                    player.rank <= 3 ? 'border-primary bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center ${
                          player.rank === 1
                            ? 'bg-yellow-500 text-black'
                            : player.rank === 2
                            ? 'bg-gray-400 text-black'
                            : player.rank === 3
                            ? 'bg-orange-600 text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {player.rank}
                      </div>
                      <Avatar className="w-12 h-12 border-2 border-primary">
                        <AvatarFallback className="text-2xl">{player.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-lg">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.wins} побед</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Винрейт</p>
                        <p className="font-bold text-lg text-primary">{player.winRate}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Баланс</p>
                        <p className="font-bold text-lg">{player.balance.toLocaleString()} ₽</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shop' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Магазин скинов</h2>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Icon name="Wallet" size={20} className="text-secondary" />
                <span className="font-semibold">Баланс: {userProfile.balance.toLocaleString()} ₽</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skins.map((skin) => (
                <Card
                  key={skin.id}
                  className={`p-6 transition-all hover:scale-105 ${
                    !skin.available ? 'opacity-50' : 'hover:border-primary'
                  }`}
                >
                  <div className="text-6xl mb-4 text-center">{skin.image}</div>
                  <div className="space-y-2 mb-4">
                    <h3 className="font-bold text-lg">{skin.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {skin.rarity}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Цена</p>
                      <p className="font-bold text-xl text-primary">{skin.price.toLocaleString()} ₽</p>
                    </div>
                    <Button
                      disabled={!skin.available || userProfile.balance < skin.price}
                      className="bg-gradient-to-r from-primary to-secondary"
                    >
                      {!skin.available ? 'Нет в наличии' : 'Купить'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6 lg:col-span-1">
                <div className="text-center space-y-4">
                  <Avatar className="w-24 h-24 mx-auto border-4 border-primary">
                    <AvatarFallback className="text-4xl">{userProfile.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{userProfile.name}</h3>
                    <p className="text-muted-foreground">Уровень {userProfile.level}</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Badge className="bg-primary">Про игрок</Badge>
                    <Badge variant="outline">Verified</Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </Button>
                </div>
              </Card>

              <Card className="p-6 lg:col-span-2">
                <h3 className="text-xl font-bold mb-6">Статистика</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Баланс</p>
                    <p className="text-2xl font-bold text-primary">{userProfile.balance.toLocaleString()} ₽</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Всего заработано</p>
                    <p className="text-2xl font-bold text-secondary">{userProfile.totalEarned.toLocaleString()} ₽</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Побед</p>
                    <p className="text-2xl font-bold">{userProfile.wins}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Поражений</p>
                    <p className="text-2xl font-bold">{userProfile.losses}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Винрейт</p>
                    <p className="text-2xl font-bold text-primary">{userProfile.winRate}%</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Уровень</p>
                    <p className="text-2xl font-bold">{userProfile.level}</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Последние матчи</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Badge variant={i === 1 ? 'default' : 'destructive'} className="w-20">
                        {i === 1 ? 'Победа' : 'Поражение'}
                      </Badge>
                      <div>
                        <p className="font-semibold">Team Alpha vs Team Beta</p>
                        <p className="text-sm text-muted-foreground">Dust II • 2 часа назад</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-lg ${i === 1 ? 'text-primary' : 'text-destructive'}`}>
                        {i === 1 ? '+1,250' : '-500'} ₽
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🎮</div>
                <h3 className="font-bold text-lg">CS2 Arena</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Играй, зарабатывай и побеждай в турнирах Counter-Strike 2
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Как играть</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Правила</li>
                <li>Условия</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Discord</li>
                <li>Telegram</li>
                <li>VK</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 CS2 Arena. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
