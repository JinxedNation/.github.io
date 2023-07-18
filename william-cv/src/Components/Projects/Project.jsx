import React from 'react';
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EcoWarriors      from './EcoWarriors';
import FoodDeliveryGame from './FoodDeliveryGame';
import PixelsEngine     from './PixelsEngine';



function Project()
{
    return(

        <div>
            <h1>My Projects</h1>
                <Tabs>
                    <TabList>
                        <Tab>Food Delivery Game</Tab>
                        <Tab>Eco Warriors</Tab>
                        <Tab>Pixels Engine</Tab>
                    </TabList>

                    <TabPanel>
                        <FoodDeliveryGame />
                    </TabPanel>


                    <TabPanel>
                        <EcoWarriors />
                    </TabPanel>


                    <TabPanel>
                        <PixelsEngine />
                    </TabPanel>
                </Tabs>
        </div>
    );
}

export default Project;