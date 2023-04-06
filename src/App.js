
import React, { useState } from 'react';
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	Tabbar,
	TabbarItem,
	Epic,
	Panel,
	Group,
	Placeholder,
	PanelHeader
} from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
	const [tab, setTab] = useState('one');

	const onTabChange = e => {
		setTab(e.currentTarget.dataset.tab);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<Epic
								activeStory={tab}
								tabbar={
									<Tabbar shadow={false}>
										<TabbarItem 
											selected={tab === 'one'}
											onClick={onTabChange}
											text="1"
											data-tab="one"
										>
											<Icon28UserCircleOutline />
										</TabbarItem>
										<TabbarItem 
											selected={tab === 'two'}
											onClick={onTabChange}
											text="2"
											data-tab="two"
										>
											<Icon28UserCircleOutline />
										</TabbarItem>
										<TabbarItem 
											selected={tab === 'three'}
											onClick={onTabChange}
											text="3"
											data-tab="three"
										>
											<Icon28UserCircleOutline />
										</TabbarItem>
									</Tabbar>
								}
							>
								<View id="one" activePanel="one">
									<Panel id="one">
										<PanelHeader>Первый</PanelHeader>
										<Group>
											<Placeholder
												icon={<Icon28UserCircleOutline width={100} height={100} />}
											>1</Placeholder>
										</Group>
									</Panel>
								</View>
								<View id="two" activePanel="two">
									<Panel id="two">
										<PanelHeader>Второй</PanelHeader>
										<Group>
											<Placeholder
												icon={<Icon28UserCircleOutline width={100} height={100} />}
											>2</Placeholder>
										</Group>
									</Panel>
								</View>
								<View id="three" activePanel="three">
									<Panel id="three">
										<PanelHeader>Третий</PanelHeader>
										<Group>
											<Placeholder
												icon={<Icon28UserCircleOutline width={100} height={100} />}
											>3</Placeholder>
										</Group>
									</Panel>
								</View>
							</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
