// https://www.terraform.io/docs/providers/okta/r/threat_insight_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatInsightSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies how Okta responds to authentication requests from suspicious IPs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/threat_insight_settings#action ThreatInsightSettings#action}
  */
  readonly action: string;
  /**
  * List of Network Zone IDs to exclude to be not logged or blocked by Okta ThreatInsight and proceed to Sign On rules evaluation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/threat_insight_settings#network_excludes ThreatInsightSettings#network_excludes}
  */
  readonly networkExcludes?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/threat_insight_settings okta_threat_insight_settings}
*/
export class ThreatInsightSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_threat_insight_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/threat_insight_settings okta_threat_insight_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatInsightSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatInsightSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_threat_insight_settings',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._networkExcludes = config.networkExcludes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkExcludes),
    };
  }
}
