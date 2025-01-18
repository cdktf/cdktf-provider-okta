# `dataOktaApps` Submodule <a name="`dataOktaApps` Submodule" id="@cdktf/provider-okta.dataOktaApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaApps <a name="DataOktaApps" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps okta_apps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaApps(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active_only: typing.Union[bool, IResolvable] = None,
  include_non_deleted: typing.Union[bool, IResolvable] = None,
  label: str = None,
  label_prefix: str = None,
  use_optimization: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.activeOnly">active_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search only active applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.includeNonDeleted">include_non_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to include non-active, but not deleted apps in the results. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.label">label</a></code> | <code>str</code> | Searches for applications whose label or name property matches this value exactly. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.labelPrefix">label_prefix</a></code> | <code>str</code> | Searches for applications whose label or name property begins with this value. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.useOptimization">use_optimization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use query optimization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_only`<sup>Optional</sup> <a name="active_only" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.activeOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search only active applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#active_only DataOktaApps#active_only}

---

##### `include_non_deleted`<sup>Optional</sup> <a name="include_non_deleted" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.includeNonDeleted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to include non-active, but not deleted apps in the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#include_non_deleted DataOktaApps#include_non_deleted}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.label"></a>

- *Type:* str

Searches for applications whose label or name property matches this value exactly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#label DataOktaApps#label}

---

##### `label_prefix`<sup>Optional</sup> <a name="label_prefix" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.labelPrefix"></a>

- *Type:* str

Searches for applications whose label or name property begins with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#label_prefix DataOktaApps#label_prefix}

---

##### `use_optimization`<sup>Optional</sup> <a name="use_optimization" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.useOptimization"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use query optimization.

If you specify `useOptimization=true` in the request query, the response contains a subset of app instance properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#use_optimization DataOktaApps#use_optimization}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetActiveOnly">reset_active_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetIncludeNonDeleted">reset_include_non_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabelPrefix">reset_label_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetUseOptimization">reset_use_optimization</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_active_only` <a name="reset_active_only" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetActiveOnly"></a>

```python
def reset_active_only() -> None
```

##### `reset_include_non_deleted` <a name="reset_include_non_deleted" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetIncludeNonDeleted"></a>

```python
def reset_include_non_deleted() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_label_prefix` <a name="reset_label_prefix" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabelPrefix"></a>

```python
def reset_label_prefix() -> None
```

##### `reset_use_optimization` <a name="reset_use_optimization" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetUseOptimization"></a>

```python
def reset_use_optimization() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOktaApps resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaApps.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaApps.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaApps.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaApps.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOktaApps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOktaApps to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOktaApps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaApps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.apps">apps</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList">DataOktaAppsAppsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnlyInput">active_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeletedInput">include_non_deleted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefixInput">label_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimizationInput">use_optimization_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnly">active_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeleted">include_non_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefix">label_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimization">use_optimization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.apps"></a>

```python
apps: DataOktaAppsAppsList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList">DataOktaAppsAppsList</a>

---

##### `active_only_input`<sup>Optional</sup> <a name="active_only_input" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnlyInput"></a>

```python
active_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_non_deleted_input`<sup>Optional</sup> <a name="include_non_deleted_input" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeletedInput"></a>

```python
include_non_deleted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `label_prefix_input`<sup>Optional</sup> <a name="label_prefix_input" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefixInput"></a>

```python
label_prefix_input: str
```

- *Type:* str

---

##### `use_optimization_input`<sup>Optional</sup> <a name="use_optimization_input" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimizationInput"></a>

```python
use_optimization_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active_only`<sup>Required</sup> <a name="active_only" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnly"></a>

```python
active_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_non_deleted`<sup>Required</sup> <a name="include_non_deleted" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeleted"></a>

```python
include_non_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `label_prefix`<sup>Required</sup> <a name="label_prefix" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefix"></a>

```python
label_prefix: str
```

- *Type:* str

---

##### `use_optimization`<sup>Required</sup> <a name="use_optimization" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimization"></a>

```python
use_optimization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAppsApps <a name="DataOktaAppsApps" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsApps()
```


### DataOktaAppsAppsVisibility <a name="DataOktaAppsAppsVisibility" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsAppsVisibility()
```


### DataOktaAppsAppsVisibilityHide <a name="DataOktaAppsAppsVisibilityHide" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsAppsVisibilityHide()
```


### DataOktaAppsConfig <a name="DataOktaAppsConfig" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active_only: typing.Union[bool, IResolvable] = None,
  include_non_deleted: typing.Union[bool, IResolvable] = None,
  label: str = None,
  label_prefix: str = None,
  use_optimization: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.activeOnly">active_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search only active applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.includeNonDeleted">include_non_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to include non-active, but not deleted apps in the results. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.label">label</a></code> | <code>str</code> | Searches for applications whose label or name property matches this value exactly. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.labelPrefix">label_prefix</a></code> | <code>str</code> | Searches for applications whose label or name property begins with this value. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.useOptimization">use_optimization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use query optimization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_only`<sup>Optional</sup> <a name="active_only" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.activeOnly"></a>

```python
active_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search only active applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#active_only DataOktaApps#active_only}

---

##### `include_non_deleted`<sup>Optional</sup> <a name="include_non_deleted" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.includeNonDeleted"></a>

```python
include_non_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to include non-active, but not deleted apps in the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#include_non_deleted DataOktaApps#include_non_deleted}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Searches for applications whose label or name property matches this value exactly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#label DataOktaApps#label}

---

##### `label_prefix`<sup>Optional</sup> <a name="label_prefix" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.labelPrefix"></a>

```python
label_prefix: str
```

- *Type:* str

Searches for applications whose label or name property begins with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#label_prefix DataOktaApps#label_prefix}

---

##### `use_optimization`<sup>Optional</sup> <a name="use_optimization" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.useOptimization"></a>

```python
use_optimization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use query optimization.

If you specify `useOptimization=true` in the request query, the response contains a subset of app instance properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/apps#use_optimization DataOktaApps#use_optimization}

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaAppsAppsList <a name="DataOktaAppsAppsList" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsAppsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOktaAppsAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOktaAppsAppsOutputReference <a name="DataOktaAppsAppsOutputReference" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsAppsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.features">features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.visibility">visibility</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference">DataOktaAppsAppsVisibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps">DataOktaAppsApps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.features"></a>

```python
features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.visibility"></a>

```python
visibility: DataOktaAppsAppsVisibilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference">DataOktaAppsAppsVisibilityOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.internalValue"></a>

```python
internal_value: DataOktaAppsApps
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps">DataOktaAppsApps</a>

---


### DataOktaAppsAppsVisibilityHideOutputReference <a name="DataOktaAppsAppsVisibilityHideOutputReference" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.ios">ios</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.web">web</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide">DataOktaAppsAppsVisibilityHide</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.ios"></a>

```python
ios: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.web"></a>

```python
web: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.internalValue"></a>

```python
internal_value: DataOktaAppsAppsVisibilityHide
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide">DataOktaAppsAppsVisibilityHide</a>

---


### DataOktaAppsAppsVisibilityOutputReference <a name="DataOktaAppsAppsVisibilityOutputReference" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_apps

dataOktaApps.DataOktaAppsAppsVisibilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoLaunch">auto_launch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.hide">hide</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference">DataOktaAppsAppsVisibilityHideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility">DataOktaAppsAppsVisibility</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_launch`<sup>Required</sup> <a name="auto_launch" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoLaunch"></a>

```python
auto_launch: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.hide"></a>

```python
hide: DataOktaAppsAppsVisibilityHideOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference">DataOktaAppsAppsVisibilityHideOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.internalValue"></a>

```python
internal_value: DataOktaAppsAppsVisibility
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility">DataOktaAppsAppsVisibility</a>

---



