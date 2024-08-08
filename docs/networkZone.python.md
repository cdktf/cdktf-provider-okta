# `networkZone` Submodule <a name="`networkZone` Submodule" id="@cdktf/provider-okta.networkZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkZone <a name="NetworkZone" id="@cdktf/provider-okta.networkZone.NetworkZone"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone okta_network_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import network_zone

networkZone.NetworkZone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  asns: typing.List[str] = None,
  dynamic_locations: typing.List[str] = None,
  dynamic_locations_exclude: typing.List[str] = None,
  dynamic_proxy_type: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  ip_service_categories_exclude: typing.List[str] = None,
  ip_service_categories_include: typing.List[str] = None,
  proxies: typing.List[str] = None,
  status: str = None,
  usage: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Network Zone Resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.asns">asns</a></code> | <code>typing.List[str]</code> | List of asns included. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocations">dynamic_locations</a></code> | <code>typing.List[str]</code> | Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocationsExclude">dynamic_locations_exclude</a></code> | <code>typing.List[str]</code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicProxyType">dynamic_proxy_type</a></code> | <code>str</code> | Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.gateways">gateways</a></code> | <code>typing.List[str]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#id NetworkZone#id}. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesExclude">ip_service_categories_exclude</a></code> | <code>typing.List[str]</code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesInclude">ip_service_categories_include</a></code> | <code>typing.List[str]</code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.proxies">proxies</a></code> | <code>typing.List[str]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.status">status</a></code> | <code>str</code> | Network Status - can either be `ACTIVE` or `INACTIVE` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.usage">usage</a></code> | <code>str</code> | Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.name"></a>

- *Type:* str

Name of the Network Zone Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#name NetworkZone#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.type"></a>

- *Type:* str

Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#type NetworkZone#type}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.asns"></a>

- *Type:* typing.List[str]

List of asns included.

Format of each array value: a string representation of an ASN numeric value. Use with type `DYNAMIC` or `DYNAMIC_V2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#asns NetworkZone#asns}

---

##### `dynamic_locations`<sup>Optional</sup> <a name="dynamic_locations" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocations"></a>

- *Type:* typing.List[str]

Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}

---

##### `dynamic_locations_exclude`<sup>Optional</sup> <a name="dynamic_locations_exclude" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicLocationsExclude"></a>

- *Type:* typing.List[str]

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#dynamic_locations_exclude NetworkZone#dynamic_locations_exclude}

---

##### `dynamic_proxy_type`<sup>Optional</sup> <a name="dynamic_proxy_type" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.dynamicProxyType"></a>

- *Type:* str

Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`.

Use with type `DYNAMIC`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.gateways"></a>

- *Type:* typing.List[str]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#gateways NetworkZone#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#id NetworkZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_service_categories_exclude`<sup>Optional</sup> <a name="ip_service_categories_exclude" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesExclude"></a>

- *Type:* typing.List[str]

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#ip_service_categories_exclude NetworkZone#ip_service_categories_exclude}

---

##### `ip_service_categories_include`<sup>Optional</sup> <a name="ip_service_categories_include" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.ipServiceCategoriesInclude"></a>

- *Type:* typing.List[str]

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#ip_service_categories_include NetworkZone#ip_service_categories_include}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.proxies"></a>

- *Type:* typing.List[str]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#proxies NetworkZone#proxies}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.status"></a>

- *Type:* str

Network Status - can either be `ACTIVE` or `INACTIVE` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#status NetworkZone#status}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZone.Initializer.parameter.usage"></a>

- *Type:* str

Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#usage NetworkZone#usage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetAsns">reset_asns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations">reset_dynamic_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocationsExclude">reset_dynamic_locations_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType">reset_dynamic_proxy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetGateways">reset_gateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesExclude">reset_ip_service_categories_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesInclude">reset_ip_service_categories_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetProxies">reset_proxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.resetUsage">reset_usage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.networkZone.NetworkZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.networkZone.NetworkZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.networkZone.NetworkZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.networkZone.NetworkZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.networkZone.NetworkZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.networkZone.NetworkZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.networkZone.NetworkZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.networkZone.NetworkZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.networkZone.NetworkZone.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.networkZone.NetworkZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.networkZone.NetworkZone.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_asns` <a name="reset_asns" id="@cdktf/provider-okta.networkZone.NetworkZone.resetAsns"></a>

```python
def reset_asns() -> None
```

##### `reset_dynamic_locations` <a name="reset_dynamic_locations" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocations"></a>

```python
def reset_dynamic_locations() -> None
```

##### `reset_dynamic_locations_exclude` <a name="reset_dynamic_locations_exclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicLocationsExclude"></a>

```python
def reset_dynamic_locations_exclude() -> None
```

##### `reset_dynamic_proxy_type` <a name="reset_dynamic_proxy_type" id="@cdktf/provider-okta.networkZone.NetworkZone.resetDynamicProxyType"></a>

```python
def reset_dynamic_proxy_type() -> None
```

##### `reset_gateways` <a name="reset_gateways" id="@cdktf/provider-okta.networkZone.NetworkZone.resetGateways"></a>

```python
def reset_gateways() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.networkZone.NetworkZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_service_categories_exclude` <a name="reset_ip_service_categories_exclude" id="@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesExclude"></a>

```python
def reset_ip_service_categories_exclude() -> None
```

##### `reset_ip_service_categories_include` <a name="reset_ip_service_categories_include" id="@cdktf/provider-okta.networkZone.NetworkZone.resetIpServiceCategoriesInclude"></a>

```python
def reset_ip_service_categories_include() -> None
```

##### `reset_proxies` <a name="reset_proxies" id="@cdktf/provider-okta.networkZone.NetworkZone.resetProxies"></a>

```python
def reset_proxies() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.networkZone.NetworkZone.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_usage` <a name="reset_usage" id="@cdktf/provider-okta.networkZone.NetworkZone.resetUsage"></a>

```python
def reset_usage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import network_zone

networkZone.NetworkZone.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import network_zone

networkZone.NetworkZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import network_zone

networkZone.NetworkZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.networkZone.NetworkZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import network_zone

networkZone.NetworkZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput">asns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExcludeInput">dynamic_locations_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput">dynamic_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput">dynamic_proxy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput">gateways_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExcludeInput">ip_service_categories_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesIncludeInput">ip_service_categories_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput">proxies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput">usage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.asns">asns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations">dynamic_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExclude">dynamic_locations_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType">dynamic_proxy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExclude">ip_service_categories_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesInclude">ip_service_categories_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.proxies">proxies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.usage">usage</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.networkZone.NetworkZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.networkZone.NetworkZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.networkZone.NetworkZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.networkZone.NetworkZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.networkZone.NetworkZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.networkZone.NetworkZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asns_input`<sup>Optional</sup> <a name="asns_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asnsInput"></a>

```python
asns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_locations_exclude_input`<sup>Optional</sup> <a name="dynamic_locations_exclude_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExcludeInput"></a>

```python
dynamic_locations_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_locations_input`<sup>Optional</sup> <a name="dynamic_locations_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsInput"></a>

```python
dynamic_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_proxy_type_input`<sup>Optional</sup> <a name="dynamic_proxy_type_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyTypeInput"></a>

```python
dynamic_proxy_type_input: str
```

- *Type:* str

---

##### `gateways_input`<sup>Optional</sup> <a name="gateways_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gatewaysInput"></a>

```python
gateways_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_service_categories_exclude_input`<sup>Optional</sup> <a name="ip_service_categories_exclude_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExcludeInput"></a>

```python
ip_service_categories_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_service_categories_include_input`<sup>Optional</sup> <a name="ip_service_categories_include_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesIncludeInput"></a>

```python
ip_service_categories_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `proxies_input`<sup>Optional</sup> <a name="proxies_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxiesInput"></a>

```python
proxies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `usage_input`<sup>Optional</sup> <a name="usage_input" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usageInput"></a>

```python
usage_input: str
```

- *Type:* str

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZone.property.asns"></a>

```python
asns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_locations`<sup>Required</sup> <a name="dynamic_locations" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocations"></a>

```python
dynamic_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_locations_exclude`<sup>Required</sup> <a name="dynamic_locations_exclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicLocationsExclude"></a>

```python
dynamic_locations_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_proxy_type`<sup>Required</sup> <a name="dynamic_proxy_type" id="@cdktf/provider-okta.networkZone.NetworkZone.property.dynamicProxyType"></a>

```python
dynamic_proxy_type: str
```

- *Type:* str

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZone.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_service_categories_exclude`<sup>Required</sup> <a name="ip_service_categories_exclude" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesExclude"></a>

```python
ip_service_categories_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_service_categories_include`<sup>Required</sup> <a name="ip_service_categories_include" id="@cdktf/provider-okta.networkZone.NetworkZone.property.ipServiceCategoriesInclude"></a>

```python
ip_service_categories_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZone.property.proxies"></a>

```python
proxies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZone.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZone.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZone.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.networkZone.NetworkZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkZoneConfig <a name="NetworkZoneConfig" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import network_zone

networkZone.NetworkZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  asns: typing.List[str] = None,
  dynamic_locations: typing.List[str] = None,
  dynamic_locations_exclude: typing.List[str] = None,
  dynamic_proxy_type: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  ip_service_categories_exclude: typing.List[str] = None,
  ip_service_categories_include: typing.List[str] = None,
  proxies: typing.List[str] = None,
  status: str = None,
  usage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name">name</a></code> | <code>str</code> | Name of the Network Zone Resource. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type">type</a></code> | <code>str</code> | Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns">asns</a></code> | <code>typing.List[str]</code> | List of asns included. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations">dynamic_locations</a></code> | <code>typing.List[str]</code> | Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocationsExclude">dynamic_locations_exclude</a></code> | <code>typing.List[str]</code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType">dynamic_proxy_type</a></code> | <code>str</code> | Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#id NetworkZone#id}. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesExclude">ip_service_categories_exclude</a></code> | <code>typing.List[str]</code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesInclude">ip_service_categories_include</a></code> | <code>typing.List[str]</code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies">proxies</a></code> | <code>typing.List[str]</code> | Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status">status</a></code> | <code>str</code> | Network Status - can either be `ACTIVE` or `INACTIVE` only. |
| <code><a href="#@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage">usage</a></code> | <code>str</code> | Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Network Zone Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#name NetworkZone#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#type NetworkZone#type}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.asns"></a>

```python
asns: typing.List[str]
```

- *Type:* typing.List[str]

List of asns included.

Format of each array value: a string representation of an ASN numeric value. Use with type `DYNAMIC` or `DYNAMIC_V2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#asns NetworkZone#asns}

---

##### `dynamic_locations`<sup>Optional</sup> <a name="dynamic_locations" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocations"></a>

```python
dynamic_locations: typing.List[str]
```

- *Type:* typing.List[str]

Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}

---

##### `dynamic_locations_exclude`<sup>Optional</sup> <a name="dynamic_locations_exclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicLocationsExclude"></a>

```python
dynamic_locations_exclude: typing.List[str]
```

- *Type:* typing.List[str]

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#dynamic_locations_exclude NetworkZone#dynamic_locations_exclude}

---

##### `dynamic_proxy_type`<sup>Optional</sup> <a name="dynamic_proxy_type" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.dynamicProxyType"></a>

```python
dynamic_proxy_type: str
```

- *Type:* str

Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`.

Use with type `DYNAMIC`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#gateways NetworkZone#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#id NetworkZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_service_categories_exclude`<sup>Optional</sup> <a name="ip_service_categories_exclude" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesExclude"></a>

```python
ip_service_categories_exclude: typing.List[str]
```

- *Type:* typing.List[str]

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#ip_service_categories_exclude NetworkZone#ip_service_categories_exclude}

---

##### `ip_service_categories_include`<sup>Optional</sup> <a name="ip_service_categories_include" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.ipServiceCategoriesInclude"></a>

```python
ip_service_categories_include: typing.List[str]
```

- *Type:* typing.List[str]

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#ip_service_categories_include NetworkZone#ip_service_categories_include}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.proxies"></a>

```python
proxies: typing.List[str]
```

- *Type:* typing.List[str]

Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#proxies NetworkZone#proxies}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Network Status - can either be `ACTIVE` or `INACTIVE` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#status NetworkZone#status}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-okta.networkZone.NetworkZoneConfig.property.usage"></a>

```python
usage: str
```

- *Type:* str

Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/network_zone#usage NetworkZone#usage}

---



