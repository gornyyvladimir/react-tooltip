import React from 'react';
import { Tooltip, TooltipProvider } from './components/Tooltip';
import './App.css';

const App = () => {
  return (
    <TooltipProvider>
      <div className="App">
        <div>
          <h1>react-float-tooltip</h1>
          <p>Float tooltip for react components</p>
        </div>
        <div className="row">
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement">Reverted Tooltip</div>
              )}
            >
              <div className="elementWithTooltip">Reverted Tooltip</div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              disable
              tooltipElement={() => (
                <div className="tooltipElement">Disabled Tooltip</div>
              )}
            >
              <div className="elementWithTooltip">Disabled Tooltip</div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement">Reverted Tooltip</div>
              )}
            >
              <div className="elementWithTooltip">Reverted Tooltip</div>
            </Tooltip>
          </div>
        </div>
        <div className="row">
          <div>
            <Tooltip
              offset={10}
              tooltipElement={() => (
                <div className="tooltipElement">
                  Simple tooltip with offset 10
                </div>
              )}
            >
              <div className="elementWithTooltip">
                Simple tooltip with offset 10
              </div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              offset={10}
              tooltipElement={() => (
                <div className="tooltipElement">
                  Simple tooltip with offset 10
                </div>
              )}
            >
              <div className="elementWithTooltip">
                Simple tooltip with offset 10
              </div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              offset={10}
              tooltipElement={() => (
                <div className="tooltipElement">
                  Simple tooltip with offset 10
                </div>
              )}
            >
              <div className="elementWithTooltip">
                Simple tooltip with offset 10
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="row">
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement" style={{ maxWidth: '140px' }}>
                  Reverted tooltip with maxWidth on tooltipElement
                </div>
              )}
            >
              <div className="elementWithTooltip">
                Reverted tooltip with maxWidth on tooltipElement
              </div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement" style={{ maxWidth: '140px' }}>
                  Reverted tooltip with maxWidth on tooltipElement
                </div>
              )}
            >
              <div className="elementWithTooltip">
                Reverted tooltip with maxWidth on tooltipElement
              </div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              isRevert
              tooltipElement={() => (
                <div className="tooltipElement" style={{ maxWidth: '140px' }}>
                  Reverted tooltip with maxWidth on tooltipElement
                </div>
              )}
            >
              <div className="elementWithTooltip">
                Reverted tooltip with maxWidth on tooltipElement
              </div>
            </Tooltip>
          </div>
        </div>
        <div>
          <Tooltip
            className="tooltipWrapper"
            tooltipElement={() => (
              <div className="tooltipElement">
                Without inline-block for tooltip wrapper
              </div>
            )}
          >
            <div className="elementWithTooltip">
              Without inline-block for tooltip wrapper
            </div>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            className="tooltipWrapper inline"
            tooltipElement={() => (
              <div className="tooltipElement">
                With inline-block for tooltip wrapper
              </div>
            )}
          >
            <div className="elementWithTooltip">
              With inline-block for tooltip wrapper
            </div>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default App;
